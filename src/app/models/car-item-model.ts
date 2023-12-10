import { Owner } from "./owner";


export class CarItemModel {
    public _id: string = '';
    public brand: string = '';
    public model: string = '';
    public design: string = '';
    public fuel: string = '';
    public vintage: string = '';
    public price: number = 0;
    public cylinderCapacity: number = 0;
    public phone: string = '';
    public country: string = '';
    public status: string = '';
    public text: string = '';
    public photos: Array<{ originalname: string, filename: string, path: string, size: number }> = [];
    public validityOfTrafficCard: string = '';
    public carCreatedAt:Date = new Date();
    public owner: Owner = new Owner();
};