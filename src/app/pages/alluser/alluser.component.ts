import { Component } from '@angular/core';
import { CarItemModel } from 'src/app/models/car-item-model';
import { ProfileModel } from 'src/app/models/profile-model';
import { AuthService } from 'src/app/services/auth.service';
import { CarsService } from 'src/app/services/cars.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent {

  
  public choiseUser:ProfileModel = new ProfileModel();
  public focusUserOpen: boolean = false;
  public focusUserCarsOpen: boolean = false;
  public sendBtn: string =`relative block w-[80%] h-[45px] bg-transparent border-2 border-[#0ef] outline-none rounded-[40px] 
  before:absolute before:top-[-100%] before:left-0 before:w-full before:h-[300%] before:bg-[linear-gradient(#081b29,_#0ef,_#081b29,_#0ef)]
  before:z-[-1] before:duration-500 hover:before:top-0
  cursor-pointer text-[16px] text-white font-[600] z-[1] overflow-hidden`;
  public activeCard: string = "w-[300px] h-[500px] bg-[linear-gradient(45deg,_#081b29,_#0ef)] z-20 fixed top-5 left-0 rounded-r-3xl blur-0 opacity-100 duration-500";
  public inActiveCard: string = "w-[300px] h-[500px] bg-[linear-gradient(45deg,_#081b29,_#0ef)] z-20 fixed top-5 left-[-310px] rounded-r-3xl blur-lg opacity-0 duration-500";
  public otherUsersAds: Array<CarItemModel> = new Array<CarItemModel>();
  public userCreatedAt: any = "";

  ngOnInit():void{
    this.authService.navbarLinkActive = 'users';
    this.authService.authorizeCheck();
    this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[164px]`; 
    this.authService.allUsers();
    this.carService.getCars();
  };

  public authService:AuthService;
  public carService:CarsService;
  public datePipe: DatePipe
  constructor( authService:AuthService, carService:CarsService, datePipe: DatePipe){
    this.authService = authService;
    this.carService = carService;
    this.datePipe = datePipe;
  };

  public focusUser(userName:any){
    this.authService.allUser.filter((oneUser) => {
      if(oneUser.userName === userName){
        this.choiseUser = oneUser;
        this.focusUserOpen = true;
      }
    });
    this.otherUsersAds = this.carService.allCars.filter((oneElment)=> oneElment.owner.email === this.choiseUser.email);
  }

  public focusCancel(){
    this.choiseUser = new ProfileModel();
    this.otherUsersAds = new Array<CarItemModel>();
    this.focusUserOpen = false;
  }
    
}
