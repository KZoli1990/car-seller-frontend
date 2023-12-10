import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 

  ngOnInit():void{
    this.authService.navbarLinkActive = 'profile';
    this.authService.authorizeCheck();
    this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[94px]`;
    this.authService.actualUserLoad();
    this.carService.getCars();
    setTimeout(()=>{
      this.matchActualUserAddedCars();
    },1000)
  }
  public authService:AuthService;
  public carService:CarsService;
  public datePipe: DatePipe
  constructor( authService:AuthService, carService:CarsService, private router:Router, datePipe: DatePipe){
    this.authService = authService;
    this.carService = carService;
    this.datePipe = datePipe;
  };
  

  public matchActualUserAddedCars(){
    this.carService.actualUserCars = this.carService.allCars.filter((oneElement)=> oneElement.owner.email === this.authService.actualUser.email)
  }

  public navigateNewCarAdded(){
    this.router.navigate(["/addCar"]);
  };

}
