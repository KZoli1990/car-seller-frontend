import { Component } from '@angular/core';
import { CarItemModel } from 'src/app/models/car-item-model';
import { AuthService } from 'src/app/services/auth.service';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  ngOnInit():void{
    this.authService.navbarLinkActive = 'addItem';
    this.authService.authorizeCheck();
    this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[164px]`; 
    this.authService.actualUserLoad();
    this.carService.updateCarItem = new CarItemModel();
  }

  

  public authService:AuthService;
  public carService:CarsService;
  constructor( authService:AuthService, carService:CarsService){
    this.authService = authService;
    this.carService = carService;
  }

  
}
