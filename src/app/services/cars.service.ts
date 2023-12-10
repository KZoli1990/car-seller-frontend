import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import theList from '../../carListDataBase/carList';
import design from '../../carListDataBase/carDesign';
import fuel from '../../carListDataBase/carFuel';
import { CarItemModel } from '../models/car-item-model';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public actualYear: any = '';
  public Counts: number [] = [];
  public yearCounts: number [] = [];
  public carList:Array<any> = [];
  public carListModels: Array<any> = [];
  public carDesigns: Array<any> = [];
  public carFuel: Array<any> = [];
  public actualCarBrand: string = '';
  public allCars:Array<CarItemModel> = new Array<CarItemModel>();
  public actualUserCars: Array<CarItemModel> = new Array<CarItemModel>();
  public searchMatchCars: Array<CarItemModel> = new Array<CarItemModel>();
  public addCarItem:CarItemModel = new CarItemModel();
  public searchCarItem:CarItemModel = new CarItemModel();
  public updateCarItem:CarItemModel = new CarItemModel();
  public selectedSellCar:CarItemModel = new CarItemModel();
  public possibleParamsId: Array<string> = [];
  public searchToVintage: number = 0;
  public searchFromVintage: number = 1900;
  public searchToPrice: number = 0;
  public searchFromPrice: number = 0;
  public iSeeSearchResult:boolean = false;
  public loading: boolean = false;

  constructor(private datePipe: DatePipe, private http: HttpClient, private router: Router){
     //up-to-date-year
     var date = new Date();
     this.actualYear = this.datePipe.transform(date,"yyyy")
     for(let i = 1900; i <= this.actualYear; i++){
       this.Counts.push(i);
       this.searchToVintage = this.actualYear;
     }
     this.yearCounts = this.Counts.sort((a, b) => a > b ? -1 : 1);
     //Cars select input field setup in carListDataBase
     this.carList = theList.sort((a, b) => a.brand.localeCompare(b.brand));
     this.carDesigns = design;
     this.carFuel = fuel;
  }

  public brandInsert(){
    if(this.updateCarItem.brand){
      let model = this.carList.filter(oneCar => oneCar.brand === this.updateCarItem.brand);
      this.carListModels = model[0].models;
    } else {
      let model = this.carList.filter(oneCar => oneCar.brand === this.actualCarBrand);
      this.carListModels = model[0].models;
      this.searchCar();
    }
  }
  

public carPhotosUpload: Array<File> | null = null;

carPhotosSelected = async (event: any) => {
  await this.processCarPhotosFile(event);
};
   
processCarPhotosFile(event: any): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const selectedFiles = event.currentTarget.files;

      if (selectedFiles && selectedFiles.length > 0) {
        let allFileSupported = true;

        for (let i = 0; i < selectedFiles.length; i++) {
          const file: File = selectedFiles[i];
          const allowedTypes = ['image/png', 'image/jpeg']; // Engedélyezett MIME típusok
          
          if (!allowedTypes.includes(file.type)) {
            allFileSupported = false;
            break;
          }
        }

        if (allFileSupported) {
          this.carPhotosUpload = Array.from(selectedFiles);
          resolve();
        } else {
          reject(new Error('Csak png vagy jpg típusú lehet'));
          alert('Csak png vagy jpg típusú lehet');
        }
      } else {
        reject(new Error('Nincsenek kijelölve fájlok.'));
        alert('Nincsenek kijelölve fájlok.');
      }
    } catch (error) {
      reject(error);
    }
  });
}

public addCar() {
  try {
    this.loading = true;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('carSellerToken')}`
    });
    if(this.addCarItem.model && this.addCarItem.fuel &&  this.addCarItem.design && this.addCarItem.price){
      if(this.actualUserCars.length <=4 ){
        let formObj = new FormData();
        formObj.append('brand', this.actualCarBrand.toString());
        formObj.append('model', this.addCarItem.model.toString());
        formObj.append('fuel', this.addCarItem.fuel.toString());
        
        if (this.carPhotosUpload !== null) {
          for (const file of this.carPhotosUpload) {
            formObj.append('photos', file);
          }
        }
        formObj.append('design', this.addCarItem.design.toString());
        formObj.append('phone', this.addCarItem.phone.toString());
        formObj.append('country', this.addCarItem.country.toString());
        formObj.append('status', this.addCarItem.status.toString());
        formObj.append('text', this.addCarItem.text.toString());
        formObj.append('vintage', this.addCarItem.vintage.toString());
        formObj.append('price', this.addCarItem.price.toString());
        formObj.append('validityOfTrafficCard', this.addCarItem.validityOfTrafficCard.toString());
        formObj.append('cylinderCapacity', this.addCarItem.cylinderCapacity.toString());
        
        this.http.post<CarItemModel>("https://car-seller-api.onrender.com/carsellerapi/v1/addCar",formObj , {headers: headers}).subscribe(
          (d) => {
            console.log(d);
            this.router.navigate(["/browser"]);
          },
          (error) => {
            console.log(error.error)
            alert('A 3 kép együtt nem lehet nagyobb 1mb-nál, mivel figyelnem kell a (512mb)maximum tárhelyre, kérlek konvertáld! Megértést köszönöm.')
            this.loading = false;
          },
          () => {
            this.loading = false;
            this.carPhotosUpload = null;
            this.actualCarBrand = '';
            this.addCarItem = new CarItemModel();
            this.updateCarItem = new CarItemModel();
          }
          );
        console.log(formObj)
      } else{
        alert('Betelt a tárhelyed kérlek törölj egy hirdetést! Egy felhasználónak maximum csak 5 hirdetése lehet.');
      }
      
    } else {
      alert('Az összes mező kitöltése kötelező!')
    }
    
  } catch (err) {
    console.log(err);
  }
}

public getCars(){
  try {
    this.loading = true;
    this.http.get<Array<CarItemModel>>("https://car-seller-api.onrender.com/carsellerapi/v1/allCar")
    .subscribe(
    (t) => {
      this.allCars = t;
      console.log(this.allCars);
      this.searchCar();
    }, (error) => {
      console.log(error.error)
      this.loading = false;
    },
    () => {
      this.loading = false;
    })
  } catch (error) {
    console.log(error)
  }
 
}

public possibleSellCarsParamsId(){
  setTimeout(()=>{
    this.allCars.forEach((oneCar) => this.possibleParamsId.push(oneCar._id) )
    console.log(this.possibleParamsId)
  },100)
};

public selectCar(carId:any){
  this.router.navigate([`/browser/${carId}/view`]);
};

public selectUpdateCar(id:string){
  this.allCars.filter((oneCar) => {
    if(oneCar._id === id){
      this.updateCarItem = oneCar;
      this.brandInsert();
    }
  });
}

public updateCar(id:string){
  
  try {
    this.loading = true;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('carSellerToken')}`
    });
    if(this.updateCarItem.model && this.updateCarItem.fuel &&  this.updateCarItem.design && this.updateCarItem.price){
      let formObj = new FormData();
        formObj.append('brand', this.updateCarItem.brand.toString());
        formObj.append('model', this.updateCarItem.model.toString());
        formObj.append('fuel', this.updateCarItem.fuel.toString());
        
        if (this.carPhotosUpload !== null) {
          for (const file of this.carPhotosUpload) {
            formObj.append('photos', file);
          }
        }
        formObj.append('design', this.updateCarItem.design.toString());
        formObj.append('phone', this.updateCarItem.phone.toString());
        formObj.append('country', this.updateCarItem.country.toString());
        formObj.append('status', this.updateCarItem.status.toString());
        formObj.append('text', this.updateCarItem.text.toString());
        formObj.append('vintage', this.updateCarItem.vintage.toString());
        formObj.append('price', this.updateCarItem.price.toString());
        formObj.append('validityOfTrafficCard', this.updateCarItem.validityOfTrafficCard.toString());
        formObj.append('cylinderCapacity', this.updateCarItem.cylinderCapacity.toString());
        this.http.put<CarItemModel>(`https://car-seller-api.onrender.com/carsellerapi/v1/updateCar/${id}`,formObj , {headers: headers}).subscribe(
          (d) => {
            console.log(d);
            this.router.navigate([`/browser/${id}/view`]);
          },
          (error) => {
            console.log(error.error)
            alert('A 3 kép együtt nem lehet nagyobb 1mb-nál, mivel figyelnem kell a (512mb)maximum tárhelyre, kérlek konvertáld! Megértést köszönöm.');
            this.loading = false;
          },() => {
            this.loading = false;
            this.carPhotosUpload = null;
            this.actualCarBrand = '';
            this.addCarItem = new CarItemModel();
            this.updateCarItem = new CarItemModel();
          }
          );
        console.log(formObj)
      } else {
      alert('Az összes mező kitöltése kötelező!')
    }
    
  } catch(err){
    console.log(err)
  }
  
}
public removeCar(id:string){
  let name = '';
  this.allCars.filter((oneCar) => {
    if(oneCar._id === id){
      name = oneCar.brand + ' ' + oneCar.model+ ' ' + oneCar.cylinderCapacity;
    }
  });
  if(confirm("Tényleg törölni szeretnéd a "+name+ " nevű hirdetésedet ?")) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('carSellerToken')}`
    });
    try {
      this.loading = true;
      this.http.delete("https://car-seller-api.onrender.com/carsellerapi/v1/removeCar/" +id, {headers: headers})
      .subscribe((t) => {
        console.log(t);
      },
      (error) => {
        this.loading = false;
      },() => {
        this.loading = false;
        
      });
    } catch (error) {
      console.log(error)
    }
    finally{
      this.getCars();
      this.router.navigate([`/browser`]);
    }
    
    
  }
}

public searchCar(){
 
  let findData = this.allCars;
  
  if(this.actualCarBrand){
    findData = findData.filter((oneItem) =>(this.actualCarBrand === oneItem.brand))
  }
  if(this.searchCarItem.model){
    findData = findData.filter((oneItem) =>(this.searchCarItem.model === oneItem.model))
  }
  if(this.searchCarItem.fuel){
    findData = findData.filter((oneItem) =>(this.searchCarItem.fuel === oneItem.fuel))
  }
  if(this.searchCarItem.design){
    findData = findData.filter((oneItem) =>(this.searchCarItem.design === oneItem.design))
  }
  if(this.searchToVintage){
    findData = findData.filter((oneItem) =>(this.searchFromVintage <= parseInt(oneItem.vintage)))
  }
  if(this.searchFromVintage){
    findData = findData.filter((oneItem) =>(this.searchToVintage >= parseInt(oneItem.vintage)))
  }
  if(this.searchToPrice){
    findData = findData.filter((oneItem) =>(this.searchToPrice >= oneItem.price))
  }
  if(this.searchFromPrice){
    findData = findData.filter((oneItem) =>(this.searchFromPrice <= oneItem.price))
  }
  this.searchMatchCars = findData;
  console.log(findData)
}

public searchFixation(){
  this.iSeeSearchResult = true
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}
}


