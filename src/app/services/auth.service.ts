import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileModel } from '../models/profile-model';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public btn: string =`relative block w-[80%] h-[45px] bg-transparent border-2 border-[#0ef] outline-none rounded-[40px] 
  before:absolute before:top-[-100%] before:left-0 before:w-full before:h-[300%] before:bg-[linear-gradient(#081b29,_#0ef,_#081b29,_#0ef)]
  before:z-[-1] before:duration-500 hover:before:top-0
  cursor-pointer text-[16px] text-white font-[600] z-[1] overflow-hidden`;

  public navBarIndicator: string = `absolute top-[13px] w-[70px] h-[70px] bg-[linear-gradient(45deg,_#081b29,_#0ef)] rounded-full border-[6px] border-[#081b29] duration-500
  before:absolute before:top-[54%] before:left-[-21px] before:w-[20px] before:h-[20px] before:bg-[#fff] before:rounded-tr-[20px] before:shadow-regIndicatorShadow
  after:absolute after:top-[54%] after:right-[-21px] after:w-[20px] after:h-[20px] after:bg-[#fff] after:rounded-tl-[20px] after:shadow-regIndicatorShadow
  `;
  public navBarIndicatorPosition: string = "";
  public navbarLinkActive: string = "";
  public isSignUp: boolean = false;
  public profile:ProfileModel = new ProfileModel();
  public allUser:Array<ProfileModel> = new Array<ProfileModel>();
  public authError: string = "";
  public loading: boolean = false;
  public actualUser:ProfileModel = new ProfileModel();
  public choiseAvatarName: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  public authChoise(isSignUp: boolean){
    this.isSignUp = isSignUp;
    this.authError = "";
  }

  //login section 
  public login(){
    
    try{
      this.authError = '';
      this.loading = true;
      this.http.post<TokenModel>("https://car-seller-api.onrender.com/carsellerapi/v1/users", this.profile)
      .subscribe((t) => {
        localStorage.setItem('carSellerToken', t.token);
        this.actualUserGet();
      },
      (error: any) => {
        this.authError = error.error;
        this.loading = false;
      },
      () => {
        // Kérés befejeződött, állítsd false-ra a loading-et
        this.loading = false;
      });
    } catch (err:any ){
      console.log(err)
    } 
   
  };

  //logged in user
  public actualUserGet(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('carSellerToken')}`
    });
    this.http.get<ProfileModel>("https://car-seller-api.onrender.com/carsellerapi/v1/users/loggedUser", {headers: headers} )
    .subscribe(t => {
      localStorage.setItem('carSellerActualUser', JSON.stringify(t));
      this.router.navigate(["/browser"]);
    });

    
  }

  //Register img upload section
  public fileToUpload: File | null = null;

  onFileSelected = async (event: any) => {
    this.fileToUpload = null;
    this.loading = true;
    await this.processFile(event);
    this.choiseAvatarName = event.target.files[0].name
  };
  
  processFile(event: any): Promise<void> {
    this.loading = true;
    return new Promise((resolve, reject) => {
      try {
        if (event.currentTarget.files[0].type == 'image/png' || event.currentTarget.files[0].type == 'image/jpeg' ) {
          this.fileToUpload = event.currentTarget.files[0];
          resolve();
        } else {
          reject(new Error('Csak png típusú lehet'));
          this.authError = 'Csak png típusú lehet';
        }
      } catch (error) {
        reject(error);
      }finally {
        this.loading = false;
      }
    });
  };

  //Register section
  public register() {
    
    if ( this.profile.userName && this.profile.email && this.profile.password && this.profile.firstName && this.profile.lastName && this.fileToUpload ) {
      try {
        this.authError = '';
        this.loading = true;
  
        let formObj = new FormData();
        formObj.append('userName', this.profile.userName.toString());
        formObj.append('email', this.profile.email.toString());
        formObj.append('password', this.profile.password.toString());
        formObj.append('avatar', this.fileToUpload);
        formObj.append('firstName', this.profile.firstName.toString());
        formObj.append('lastName', this.profile.lastName.toString());
        formObj.append('createdAt', this.profile.createdAt.toString());
  
        this.http.post<ProfileModel>("https://car-seller-api.onrender.com/carsellerapi/v1/users/signup", formObj)
          .subscribe(
            (d) => {
              console.log(d);
              this.authChoise(false);
            },
            (error) => {
              this.authError = error.error;
              this.loading = false;
            },
            () => {
              this.loading = false;
            }
          );
      } catch (err) {
        console.log(err);
      }
    } else {
      this.authError = 'Az összes mező kitöltése kötelező képefeltöltéssel együtt!';
    }
  };

  public allUsers(){

   try {
    this.loading = true;
    this.http.get<Array<ProfileModel>>("https://car-seller-api.onrender.com/carsellerapi/v1/allUsers")
    .subscribe(
      (t) => {
        this.allUser = t;
        console.log(this.allUser);
      },
      (error) => {
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );

   } catch (error) {
    console.log(error)
   }
  }

  public logout(){
    localStorage.removeItem('carSellerToken');
    localStorage.removeItem('carSellerActualUser');
    this.router.navigate(["/browser"]);
  }

  public actualUserLoad(){
    if(localStorage.getItem('carSellerActualUser') != null){
      let data = JSON.parse(localStorage.getItem('carSellerActualUser') || '');
      this.actualUser = data;
    }
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('carSellerActualUser') != null;
  }
    
  public authorizeCheck(){
    if(!this.isLoggedIn()){
      if(this.navbarLinkActive === 'profile' || this.navbarLinkActive === 'addItem'){
        this.router.navigate(["/browser"]);
      }
    } else {
      if(this.navbarLinkActive === 'logIn' || this.navbarLinkActive === 'author' || this.navbarLinkActive === 'users'){
        this.router.navigate(["/browser"]);
      }
    }
  }
};

