import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarItemModel } from 'src/app/models/car-item-model';
import { AuthService } from 'src/app/services/auth.service';
import { CarsService } from 'src/app/services/cars.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
  public sellCarId: string | null = "";
  public foundCar: CarItemModel = new CarItemModel();
  public notMatch: boolean = false;
  public actualCarImgPath:string = "";
  public imgCount: number = 0;
  public iSeeFullImg: boolean = false;
  public sellCarCreatedAtConvert:any = '';
  public openFullImgViewStyle: string = "w-full h-[200%] relative top-0 blur-0 opacity-100 overflow-hidden bg-[#081b29] z-30 duration-500";
  public closeFullImgViewStyle: string = "w-0 h-0 relative top-0 blur-lg opacity-0 overflow-hidden bg-[#081b29] z-30 duration-500";
  
  async ngOnInit(): Promise<void> {
    this.carService.getCars();
    this.sellCarId = this.activatedRoute.snapshot.paramMap.get('sellCarId');
    setTimeout(()=>{
      this.checkId();
    },800)

  }

  public authService:AuthService;
  public carService:CarsService;
  public datePipe: DatePipe;
  constructor( authService:AuthService, carService:CarsService, private activatedRoute: ActivatedRoute, datePipe: DatePipe){
    this.datePipe = datePipe;
    this.authService = authService;
    this.carService = carService;
  }

  public checkId(){
      this.carService.allCars.filter((oneCar) => {
        if(oneCar._id === this.sellCarId){
          this.foundCar = oneCar
          this.actualCarImgPath = oneCar.photos[0].path;
        } else {
          this.notMatch = true;
        }
      })
      console.log(this.foundCar)
  }

  public selectImg(path:string){
    this.foundCar.photos.filter((oneImg)=> {
      if(oneImg.path === path){
        this.actualCarImgPath = oneImg.path
      }
    })
  }

  public incrementImgCount(){
    this.imgCount++
  }

  public decrementImgCount(){
    this.imgCount--
  }

}
