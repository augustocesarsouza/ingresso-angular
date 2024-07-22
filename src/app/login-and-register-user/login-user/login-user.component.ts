import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUserService } from '../login-user.service';
import { DataService } from '../data.service';
import { Subscription, combineLatest } from 'rxjs';
import { jwtDecode } from "jwt-decode";

interface ErrorObj {
  data: Data,
  message: string;
  typeMessage: string;
}

export interface Data {
  id: string;
  name: string;
}

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent implements OnInit, OnDestroy {

  containerMainSvgInput!: HTMLElement;
  containerSpanAndInput!: HTMLElement;
  spanCpfOrEmail!: HTMLElement;
  containerSvgUser!: NodeList;

  containerMainSvgPassword!: HTMLElement;
  containerPasswordInput!: HTMLElement;
  spanPassword!: HTMLElement;
  containerInputCodeMain!: HTMLElement;
  containerModalCentralSendCodeEmail!: HTMLElement;
  currentPath: string | undefined;
  userLogin!: Data;
  registrationConfirmed = false;
  confirmEmailRegister = false;
  codeSendFormEmailConfirmedLogin = false;
  invalidUsernamePasswordOrCode: { value: boolean } = { value: false };
  emailResendToEmail = false;
  private timeoutId: any;
  private timeoutIdGetContainerModalCentral: any;
  private timeoutIdContainerAndSvgRed: any;
  private subscription!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private loginUserService: LoginUserService, private dataService: DataService){
  }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      document.body.style.backgroundColor = "#fff";
      this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
      this.containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
      this.spanCpfOrEmail = this.containerSpanAndInput?.firstChild as HTMLElement;

      this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
      this.containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
      this.spanPassword = this.containerPasswordInput?.firstChild as HTMLElement;

      this.containerInputCodeMain = document.querySelector('.container-input-cod-and-svg-lock') as HTMLElement;
      this.containerSvgUser = document.querySelectorAll('.container-svg-user');
    }

    this.subscription = combineLatest([
      this.route.queryParams,
      this.route.url
    ]).subscribe(([ params, urlSegments ]) => {
      let currentPath = urlSegments.map(segment => segment.path).join('/');

      if(currentPath === "confirmation-of-email"){
        let token = params['token'];

        this.verifyToken(token);
      }
    });
  }

  applyCssRedContainerAndSvgLogin(statusObject: { value: boolean }){
    if(this.containerMainSvgInput){
      this.containerMainSvgInput.style.borderColor = 'rgb(163, 0, 1)';
    }

    if(this.containerMainSvgPassword){
      this.containerMainSvgPassword.style.borderColor = 'rgb(163, 0, 1)';
    }

    if(this.containerSvgUser){
      this.containerSvgUser.forEach((el) => {
        let svg1 = el.firstChild as SVGElement;
        svg1.style.fill = 'rgb(163, 0, 1)';
      });
    }

    this.timeoutIdContainerAndSvgRed = setTimeout(() => {
      if(this.containerMainSvgInput){
        this.containerMainSvgInput.style.borderColor = 'rgb(217 217 217)';
      }

      if(this.containerMainSvgPassword){
        this.containerMainSvgPassword.style.borderColor = 'rgb(217 217 217)';
      }

      if(this.containerSvgUser){
        this.containerSvgUser.forEach((el) => {
          let svg1 = el.firstChild as SVGElement;
          svg1.style.fill = 'rgb(217 217 217)';
        });
      }

      statusObject.value = !statusObject.value;
    }, 1000);
  }

  verifyToken(token: string){
    if(token !== null && token.length > 20){
      const tokenExp = jwtDecode(token).exp;

      if(tokenExp === undefined)
        return;

      this.confirmTokenUser(token);
    }
  }

  confirmTokenUser = async (token: string) => {
    const res = await fetch(`/api/v1/public/user/confirm-token/${token}`);

    if (res.status === 200) {
      const json = await res.json();

      this.registrationConfirmed = true;
      document.body.style.overflowY = 'hidden';
    }
  };

  onClickLogin(inputCpfOrEmail: HTMLInputElement, inputPassword: HTMLInputElement){
    let valueCpfOrEmail = inputCpfOrEmail.value;
    let valuePassword = inputPassword.value;

    this.loginUserService.loginUser(valueCpfOrEmail, valuePassword)
    .subscribe({
      next: (success: any) => {
        console.log(success);

        let user = success.data;

        if(user.codeSentSuccessfullyEmail){
          this.userLogin = user;

          this.dataService.setData(user);
          this.codeSendFormEmailConfirmedLogin = true;

          this.timeoutIdGetContainerModalCentral = setTimeout(() => {
            this.containerModalCentralSendCodeEmail = document.querySelector('.container-modal-central-send-code-email') as HTMLElement;
          }, 100);
        }
      },
      error: error => {
        if(error.status === 401){
          this.invalidUsernamePasswordOrCode.value = true;

          this.applyCssRedContainerAndSvgLogin(this.invalidUsernamePasswordOrCode);
        }

        const errorObj: ErrorObj = error.error;

        if(errorObj.typeMessage === "email"){
          this.userLogin = errorObj.data;
          this.confirmEmailRegister = true;
        }
      }
    });
  }

  async onClickEntryCode(input: HTMLInputElement){
    let valueInput = input.value;
    let idUser = this.userLogin.id;

    const res = await fetch(`/api/v1/public/user/verific/${valueInput}/${idUser}`);

    if(res.status === 200){
      this.router.navigate(['/home']);
    }else if(res.status === 400){
      this.codeSendFormEmailConfirmedLogin = false;
      this.invalidUsernamePasswordOrCode.value = true;

      this.applyCssRedContainerAndSvgLogin(this.invalidUsernamePasswordOrCode);
    }
  }

  resendEmailCode(){
    this.loginUserService.resendCodeEmail(this.userLogin)
    .subscribe({
      next: (success: any) => {
        if(this.containerModalCentralSendCodeEmail){
          this.containerModalCentralSendCodeEmail.style.gap = '18px';
          this.containerModalCentralSendCodeEmail.style.height = '25rem';
          this.emailResendToEmail = true;

          this.timeoutId = setTimeout(() => {
            this.emailResendToEmail = false;
            this.containerModalCentralSendCodeEmail.style.gap = '15px';
            this.containerModalCentralSendCodeEmail.style.height = '27rem';
          }, 1000);
        }
      },
      error: error => {
        // console.log(error);
      }
    });
  }

  onCancelCheckLogin(){
    this.codeSendFormEmailConfirmedLogin = false;
  }

  onClickInputCpfOrEmail(){
    if(this.spanCpfOrEmail){
      this.spanCpfOrEmail.style.display = 'block';
      this.containerMainSvgInput.style.padding = '2px 5px';
      this.containerMainSvgInput.style.borderColor = '#2196F3';
    }
  }

  onBlurInputCpfOrEmail(){
    if(this.spanCpfOrEmail){
      this.spanCpfOrEmail.style.display = 'none';
      this.containerMainSvgInput.style.padding = '6px 5px';
      this.containerMainSvgInput.style.borderColor = 'rgb(217 217 217)';
    }
  }

  onClickInputPassword(){
    if(this.spanPassword){
      this.spanPassword.style.display = 'block';
      this.containerMainSvgPassword.style.padding = '2px 5px';
      this.containerMainSvgPassword.style.borderColor = '#2196F3';
    }
  }

  onBlurInputPassword(){
    if(this.spanPassword){
      this.spanPassword.style.display = 'none';
      this.containerMainSvgPassword.style.padding = '6px 5px';
      this.containerMainSvgPassword.style.borderColor = 'rgb(217 217 217)';
    }
  }

  onClickCreateNewAccount(){
    this.router.navigate(['/my-account/register']);
  }

  onContinueRegister(){
    this.confirmEmailRegister = false;
    // this.router.navigate(['/my-account/login']);
  }

  onClickContinue(){
    this.registrationConfirmed = false;
    document.body.style.overflowY = 'auto';
  }

  onInputNumberFocus(){
    if(this.containerInputCodeMain){
      this.containerInputCodeMain.style.borderColor = '#2196F3';
    }
  }

  onInputNumberBlur(){
    if(this.containerInputCodeMain){
      this.containerInputCodeMain.style.borderColor = 'rgb(224, 224, 224)';
    }
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }

    if(this.timeoutId){
      clearTimeout(this.timeoutId);
    }

    if(this.timeoutIdGetContainerModalCentral){
      clearTimeout(this.timeoutIdGetContainerModalCentral);
    }

    if(this.timeoutIdContainerAndSvgRed){
      clearTimeout(this.timeoutIdContainerAndSvgRed);
    }
  }
}
