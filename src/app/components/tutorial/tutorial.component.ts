import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {
  public lang:boolean = true;
  public demoAppear:boolean = true;
  public demoDelete:boolean = false;

  public authService:AuthService;
  constructor( authService:AuthService){
    this.authService = authService;
  }

  ngOnInit():void{
    const demoTerminate = localStorage.getItem('demoTerminate')
    if(demoTerminate === 'yes'){
      this.demoAppear = false;
    }
  }

  public demoTerminate(){
    this.demoAppear = false;
    if(this.demoDelete){
      localStorage.setItem('demoTerminate','yes');
    }
  }
}
