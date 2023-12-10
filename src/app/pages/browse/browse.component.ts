import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarItemModel } from 'src/app/models/car-item-model';
import { AuthService } from 'src/app/services/auth.service';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
 

  public advertisingCard1: string = "absolute top-0 right-[-100%] w-full h-full bg-cover bg-center bg-no-repeat adver1 p-6 blur-lg opacity-0 duration-500";
  public advertisingActiveCard1: string = "absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat adver1 p-6 blur-0 opacity-100 duration-500";

  public advertisingCard2: string = "absolute top-0 right-[-100%] w-full h-full bg-cover bg-center bg-no-repeat adver2 p-6 blur-lg opacity-0 duration-500";
  public advertisingActiveCard2: string = "absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat adver2 p-6 blur-0 opacity-100 duration-500";

  public advertisingCard3: string = "absolute top-0 right-[-100%] w-full h-full bg-cover bg-center bg-no-repeat adver3 p-6 blur-lg opacity-0 duration-500";
  public advertisingActiveCard3: string = "absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat adver3 p-6 blur-0 opacity-100 duration-500";

  public card1:boolean = true;
  public card2:boolean = false;
  public card3:boolean = false;

  ngOnInit():void{
    this.authService.navbarLinkActive = 'home';
    this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[24px]`;
    
    this.authService.actualUserLoad();
    this.carService.getCars();
   
    //carousel
    this.carouselTimer();
    this.carService.updateCarItem = new CarItemModel();
  }

 

  public carouselTimer(){
    this.card1 = true;
    this.card2 = false;
    this.card3 = false;

    setTimeout(()=>{
      this.card1 = false;
      this.card2 = true;
      this.card3 = false;
    },10000);
    setTimeout(()=>{
      this.card1 = false;
      this.card2 = false;
      this.card3 = true;
    },20000);

    setInterval(()=>{
      this.card1 = true;
      this.card2 = false;
      this.card3 = false;

      setTimeout(()=>{
        this.card1 = false;
        this.card2 = true;
        this.card3 = false;
      },10000);
      setTimeout(()=>{
        this.card1 = false;
        this.card2 = false;
        this.card3 = true;
      },20000);
    },30000);
  };

  public authService:AuthService;
  public carService:CarsService;
  constructor( authService:AuthService, carService:CarsService, public router:Router){
    this.authService = authService;
    this.carService = carService;
  }


}
