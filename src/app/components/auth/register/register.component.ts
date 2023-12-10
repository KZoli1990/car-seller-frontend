import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  styles: [
    `#anim1 {
      --i:17;
      --j:0;
    }`,
    `#anim2 {
      --i:18;
      --j:1;
    }`,
    `#anim3 {
      --i:19;
      --j:2;
    }`,
    `#anim4 {
      --i:20;
      --j:3;
    }`,
    `#anim5 {
      --i:21;
      --j:4;
    }`,
    `#anim6 {
      --i:22;
      --j:5;
    }`,
    `#anim7 {
      --i:17;
      --j:0;
    }`,
    `#anim8 {
      --i:18;
      --j:1;
    }`,
    
  ]
})
export class RegisterComponent {
 
  public simpleRegisterFormAnimateH2: string = "text-[22px] text-white text-center font-bold translate-x-[120%] opacity-0 blur-md duration-700 delay-mathJ";
  public activeRegisterFormAnimateH2: string = "text-[22px] text-white text-center font-bold translate-x-0 opacity-100 blur-0 duration-700 delay-mathI"

  public simpleRegisterInputBoxAnimate: string = "relative w-full h-[50px] my-[25px] translate-x-[120%] opacity-0 blur-md duration-700 delay-mathJ";
  public activeRegisterInputBoxAnimate: string = "relative w-full h-[50px] my-[25px] translate-x-0 opacity-100 blur-0 duration-700 delay-mathI";

  public simpleRegisterBtnAnimate: string = `relative w-full h-[45px] bg-transparent border-2 border-[#0ef] outline-none rounded-[40px] 
  cursor-pointer text-[16px] text-white font-[600] z-[1] overflow-hidden
  before:absolute before:top-[-100%] before:left-0 before:w-full before:h-[300%] before:bg-[linear-gradient(#081b29,_#0ef,_#081b29,_#0ef)] 
  before:z-[-1] before:duration-500 hover:before:top-0 translate-x-[120%] opacity-0 blur-md duration-700 delay-mathJ `;
  public activeRegisterBtnAnimate: string = `relative w-full h-[45px] bg-transparent border-2 border-[#0ef] outline-none rounded-[40px] 
  cursor-pointer text-[16px] text-white font-[600] z-[1] overflow-hidden
  before:absolute before:top-[-100%] before:left-0 before:w-full before:h-[300%] before:bg-[linear-gradient(#081b29,_#0ef,_#081b29,_#0ef)] 
  before:z-[-1] before:duration-500 hover:before:top-0 translate-x-0 opacity-100 blur-0 duration-700 delay-mathI `;

  public simpleRegisterChoiseAnimate: string = "text-[14.5px] text-white text-center mt-[20px] mb-[10px] translate-x-[120%] opacity-0 blur-md duration-700 delay-mathJ"
  public activeRegisterChoiseAnimate: string = "text-[14.5px] text-white text-center mt-[20px] mb-[10px] translate-x-0 opacity-100 blur-0 duration-700 delay-mathI"
  
  public simpleRegisterProfilBoxAnimateH2: string = "text-[30px] text-white leading-snug uppercase font-bold translate-x-[-120%] opacity-0 blur-md duration-700 delay-mathJ";
  public activeRegisterProfilBoxAnimateH2: string = "text-[30px] text-white leading-snug uppercase translate-x-0 opacity-100 blur-0 duration-700 delay-mathI";

  public simpleRegisterProfilBoxAnimate: string = "translate-x-[-120%] opacity-0 blur-md duration-700 delay-mathJ";
  public activeRegisterProfilBoxAnimate: string = "translate-x-0 pointer-events-auto opacity-100 blur-0 duration-700 delay-mathI";

  public simpleRegisterProfileInputBoxAnimate: string = "relative w-full h-[50px] my-[25px] translate-x-[-120%] opacity-0 blur-md duration-700 delay-mathJ";
  public activeRegisterProfileInputBoxAnimate: string = "relative w-full h-[50px] my-[25px] translate-x-0 opacity-100 blur-0 duration-700 delay-mathI";

  public miniMobilFullProfile: boolean = false;
 
  public authService:AuthService;
  constructor( authService:AuthService){
    this.authService = authService;
  }

  public miniMobil(choise:boolean){
    this.miniMobilFullProfile = choise;
    console.log(this.miniMobilFullProfile)
  }
 
}
