import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  public authService:AuthService;
  public carService:CarsService;
  constructor( authService:AuthService, carService:CarsService){
    this.authService = authService;
    this.carService = carService;
  }
}
