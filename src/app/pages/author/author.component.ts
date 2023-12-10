import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  ngOnInit():void{
    this.authService.navbarLinkActive = 'author';
    this.authService.authorizeCheck();
    this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[94px]`; 
  }

  
  public authService:AuthService;
  constructor( authService:AuthService){
    this.authService = authService;
  }
}
