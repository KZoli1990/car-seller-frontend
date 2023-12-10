import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-seller';
  
  ngOnInit():void{
    this.carService.getCars();
  }

  public authService:AuthService;
  public carService:CarsService;
  constructor( authService:AuthService, carService:CarsService){
    this.authService = authService;
    this.carService = carService;
  }

}
