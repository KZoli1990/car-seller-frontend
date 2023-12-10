import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  // styles
  public listLi: string = "relative left-[25px] list-none w-[70px] h-[70px] z-[1]";
  public btn: string = "relative flex justify-center items-center flex-col w-full text-center font-medium";
  public icon: string = "relative block leading-[75px] text-[1.5em] text-center duration-500 text-[#081b29]";
  public text: string = "absolute text-[#081b29] font-normal text-[0.75em] tracking-wider opacity-0 translate-y-[20px] duration-500"
 
  public activeIcon: string = "relative block leading-[75px] text-[1.5em] text-center duration-500 text-[#081b29] translate-y-[-35px]";
  public activeText: string = "absolute text-[#081b29] font-normal text-[0.75em] tracking-wider opacity-100 translate-y-[10px] duration-500";
 

  public authService:AuthService;
  constructor( authService:AuthService){
    this.authService = authService;
  }

  public logOut(){
    this.authService.loading = true;
    this.authService.navbarLinkActive = 'logOut';
    this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[234px]`; 
    setTimeout(()=>{
      this.authService.logout();
      this.authService.loading = false;
      this.authService.navbarLinkActive = 'home';
      this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[24px]`;
    },500)
    
  }  
  

}
