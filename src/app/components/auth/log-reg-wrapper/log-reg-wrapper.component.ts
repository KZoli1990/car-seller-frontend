import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-reg-wrapper',
  templateUrl: './log-reg-wrapper.component.html',
  styleUrls: ['./log-reg-wrapper.component.css'],
 
})
export class LogRegWrapperComponent {

  public simpleWrapper: string = "relative w-[250px] h-[450px] first-break:w-[350px] second-break:w-[570px] third-break:w-[750px] bg-transparent border-2 border-[#0ef] overflow-hidden shadow-uniq";
  public activeWrapper: string = "relative w-[250px] h-[450px] first-break:w-[350px] second-break:w-[570px] third-break:w-[750px] bg-transparent border-2 border-[#0ef] overflow-hidden shadow-uniq";

  public simpleLoginBgAnimate: string = "bg-[linear-gradient(45deg,_#081b29,_#0ef)] transform origin-bottom-right rotate-[20deg] skew-y-[71deg] first-break:rotate-[16deg] first-break:skew-y-[59deg] second-break:rotate-[14deg] second-break:skew-y-[45deg] third-break:rotate-[10deg] third-break:skew-y-[40deg] absolute top-[-4px] right-0 w-[850px] h-[600px] border-b-2 border-[#0ef] transition duration-[1500ms] ease-in-out delay-[1600ms]";
  public activeLoginBgAnimate: string = "bg-[linear-gradient(45deg,_#081b29,_#0ef)] transform origin-bottom-right rotate-0 skew-y-0 absolute top-[-4px] right-0 w-[850px] h-[600px] border-b-2 border-[#0ef] transition duration-[1500ms] ease-in-out delay-500";

  public simpleRegisterBgAnimate: string = "bg-[#081b29] absolute transform origin-bottom-left rotate-0 skew-y-0 top-full left-[250px] w-[850px] h-[700px] border-t-2 border-[#0ef] transition duration-[1500ms] ease-in-out delay-500";
  public activeRegisterBgAnimate: string = "bg-[#081b29] absolute transform origin-bottom-left rotate-[-25deg] skew-y-[-60deg] first-break:rotate-[-16deg] first-break:skew-y-[-59deg] second-break:rotate-[-14deg] second-break:skew-y-[-45deg] third-break:rotate-[-11deg] third-break:skew-y-[-41deg] top-full left-[250px] w-[850px] h-[700px] border-t-2 border-[#0ef] transition duration-[1500ms] ease-in-out delay-[1200ms]";

  ngOnInit():void{
    this.authService.navbarLinkActive = 'logIn';
    this.authService.authorizeCheck();
    this.authService.navBarIndicatorPosition = `${this.authService.navBarIndicator} translate-x-[234px]`; 
  }

  public authService:AuthService;
  constructor( authService:AuthService){ 
    this.authService = authService;
  }
}


