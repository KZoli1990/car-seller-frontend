import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `#anim1 {
      --i:0;
      --j:21;
    }`,
    `#anim2 {
      --i:1;
      --j:22;
    }`,
    `#anim3 {
      --i:2;
      --j:23;
    }`,
    `#anim4 {
      --i:3;
      --j:24;
    }`,
    `#anim5 {
      --i:4;
      --j:25;
    }`,
    `#anim6 {
      --i:0;
      --j:20;
    }`,
    `#anim7 {
      --i:1;
      --j:21;
    }`,
    
  ]
})
export class LoginComponent {

  

  public simpleLoginFormAnimateH2: string = "text-[27px] text-white text-center font-bold translate-x-0 opacity-100 blur-0 duration-700 delay-mathJ";
  public activeLoginFormAnimateH2: string = "text-[27px] text-white text-center font-bold translate-x-[-120%] opacity-0 blur-md duration-700 delay-mathI";

  public simpleLoginInputBoxAnimate: string = "relative w-full h-[50px] my-[25px] z-10 translate-x-0 opacity-100 blur-0 duration-700 delay-mathJ";
  public activeLoginInputBoxAnimate: string = "relative w-full h-[50px] my-[25px] z-10 translate-x-[-120%] opacity-0 blur-md duration-700 delay-mathI";

  public simpleLoginBtnAnimate: string = `relative w-full h-[45px] bg-transparent border-2 border-[#0ef] outline-none rounded-[40px] 
  before:absolute before:top-[-100%] before:left-0 before:w-full before:h-[300%] before:bg-[linear-gradient(#081b29,_#0ef,_#081b29,_#0ef)]
  before:z-[-1] before:duration-500 hover:before:top-0
  cursor-pointer text-[16px] text-white font-[600] z-[1] overflow-hidden translate-x-0 opacity-100 blur-0 duration-700 delay-mathJ `;
  public activeLoginBtnAnimate: string = `relative w-full h-[45px] bg-transparent border-2 border-[#0ef] outline-none rounded-[40px] 
  before:absolute before:top-[-100%] before:left-0 before:w-full before:h-[300%] before:bg-[linear-gradient(#081b29,_#0ef,_#081b29,_#0ef)]
  before:z-[-1] before:duration-500 hover:before:top-0
  cursor-pointer text-[16px] text-white font-[600] z-[1] overflow-hidden translate-x-[-120%] opacity-0 blur-md duration-700 delay-mathI`;

  public simpleRegChoiseAnimate: string = "text-[14.5px] text-white text-center mt-[20px] mb-[10px] translate-x-0 opacity-100 blur-0 duration-700 delay-mathJ"
  public activeRegChoiseAnimate: string = "text-[14.5px] text-white text-center mt-[20px] mb-[10px] translate-x-[-120%] opacity-0 blur-md duration-700 delay-mathI"

  public simpleLoginTextBoxAnimate: string = "hidden first-break:flex flex-col justify-center first-break:pt-0 first-break:pe-[10px] first-break:pb-[60px] first-break:ps-[70px] second-break:ps-[100px] absolute top-0 w-1/2 h-full  right-0 text-right third-break:pe-[40px] third-break:ps-[150px] translate-x-0 opacity-100 blur-0 duration-700 delay-mathJ";
  public activeLoginTextBoxAnimate: string = "hidden first-break:flex flex-col justify-center first-break:pt-0 first-break:pe-[10px] first-break:pb-[60px] first-break:ps-[70px] second-break:ps-[100px] absolute top-0 w-1/2 h-full  right-0 text-right third-break:pe-[40px] third-break:ps-[150px] translate-x-[120%] opacity-0 blur-md duration-700 delay-mathI";

  public simpleLoginTextBoxAnimateH2: string = "text-[16px] second-break:text-[24px] second-break:leading-4 mb-[8px] third-break:text-[36px] text-white leading-snug uppercase font-bold translate-x-0 opacity-100 blur-0 duration-700 delay-mathJ";
  public activeLoginTextBoxAnimateH2: string = "text-[16px] second-break:text-[24px] second-break:leading-4 mb-[8px] third-break:text-[36px] text-white leading-snug uppercase font-bold translate-x-[120%] opacity-0 blur-md duration-700 delay-mathI";
 
  public simpleLoginTextBoxAnimateP: string = "text-[9px] second-break:text-[13px] third-break:text-[16px] text-white translate-x-0 opacity-100 blur-0 duration-700 delay-mathJ";
  public activeLoginTextBoxAnimateP: string = "text-[9px] second-break:text-[13px] third-break:text-[16px] text-white translate-x-[120%] opacity-0 blur-md duration-700 delay-mathI";


  public authService:AuthService;
  constructor( authService:AuthService){
    this.authService = authService;
  }
}
