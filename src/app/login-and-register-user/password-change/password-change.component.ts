import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { UserService } from '../../itens-about-movie/service/user.service';

declare global {
  interface Window {
    recaptchaCallback: () => void;
  }
}

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.scss'
})
export class PasswordChangeComponent implements OnInit {
  token!: string;
  containerMainSvgPassword!: HTMLElement;
  spanPassword!: HTMLElement;
  userId = "";

  passwordActual: string = "";
  passwordConfirm: string = "";
  passwordConfirmDoNotCoincideWithPasswordActual = false;
  passwordDowsNotMeetTheRequiredCriteria = false;
  passwordUpdateSuccess = false;

  containerMainSvgChangePassword!: HTMLElement;
  spanChangePassword!: HTMLElement;
  buttonChangePassword!: HTMLElement;

  colorBorderGreen = "rgb(0, 204, 0)";
  colorBorderBlue = "#2196F3";
  colorBorderRed = "rgb(233, 74, 38)";
  colorBorderGrey = "rgb(217, 217, 217)";

  minimumOneLowercaseLetter = false;
  minimumOneUppercaseLetter = false;
  minimumOneNumber = false;
  minimumEightNumber = false;
  confirmEmailRegister = false;
  clickRecaptcha = false;

  constructor(private route: ActivatedRoute, private router: Router, private user_service: UserService){
  }

  ngOnInit(): void {
    if(typeof document === "undefined") return;

    if(typeof window !== "undefined"){
      window.recaptchaCallback = this.recaptchaCallback;
    }

    this.route.paramMap.subscribe(params => {
      let tokenGet = params.get('token');
      if(tokenGet){
        this.token = tokenGet;
        document.body.style.backgroundColor = "#fff";

        if(this.token !== null && this.token.length > 20){
          const token: any = jwtDecode(this.token);

          if(!token)
            return;

          const tokenExp = token.exp;

          const currentTime = Date.now() / 1000;

          const expirationDate = new Date(tokenExp * 1000).toISOString();
          const expirationDateData = new Date(expirationDate);

          const hourCurrentUtc = new Date(currentTime * 1000).toISOString();

          const dateObject = new Date(hourCurrentUtc);

          if (expirationDateData > dateObject) {
            // token valido
            this.userId = token.id;
          }else {
            // token não valido
            this.userId = token.id;
            // this.router.navigate(['/home']);
          }
          console.log(this.userId);

        }
      }
    });

    this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
    let containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
    this.spanPassword = containerPasswordInput?.firstChild as HTMLElement;

    this.containerMainSvgChangePassword = document.querySelector('.container-svg-change-password') as HTMLElement;
    let containerChangePasswordInput = document.querySelector('.container-change-password-input') as HTMLElement;
    this.spanChangePassword = containerChangePasswordInput?.firstChild as HTMLElement;

    this.buttonChangePassword = document.querySelector('.button-change-password') as HTMLElement;
  }

  recaptchaCallback = () => {
    this.clickRecaptcha = true;

    this.buttonChangePassword.style.pointerEvents = "auto";
    this.buttonChangePassword.style.color = "rgb(255, 255, 255)";
    this.buttonChangePassword.style.backgroundColor = "rgb(52, 120, 193)";
    this.buttonChangePassword.style.fontWeight = "500";

    this.buttonChangePassword.addEventListener("mouseenter", () => {
      this.buttonChangePassword.style.backgroundColor = "rgb(22 105 193)";
    });

    this.buttonChangePassword.addEventListener("mouseleave", () => {
      this.buttonChangePassword.style.backgroundColor = "rgb(52, 120, 193)";
    });
  };

  onClickInputPassword(){
    if(this.spanPassword){
      this.spanPassword.style.display = 'block';
      this.containerMainSvgPassword.style.padding = '2px 5px';

      if(this.containerMainSvgPassword.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgPassword.style.borderColor = this.colorBorderBlue;
      }
    }
  }

  onBlurInputPassword(){
    if(this.spanPassword){
      this.spanPassword.style.display = 'none';
      this.containerMainSvgPassword.style.padding = '6px 5px';

      if(this.containerMainSvgPassword.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgPassword.style.borderColor = this.colorBorderGrey;
      };
    }
  }

  onInputPassword(event: Event) {
    let input = event.target as HTMLInputElement;
    let password = input.value;
    this.passwordActual = password;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasEightNumber = false;

    if(password.length > 0){

      for (let i = 0; i < password.length; i++) {
        const caracter = password[i];

        if (/[A-Z]/.test(caracter)) {
          hasUppercase = true;
        }

        if (/[a-z]/.test(caracter)) {
          hasLowercase = true;
        }

        if (/[0-9]/.test(caracter)) {
          hasNumber = true;
        }

        if (hasUppercase && hasLowercase && hasNumber) {
          break;
        }
      }
    }

    if(password.length >= 9){
      hasEightNumber = true;
    }

    this.minimumOneUppercaseLetter = hasUppercase;
    this.minimumOneLowercaseLetter = hasLowercase;
    this.minimumOneNumber = hasNumber;
    this.minimumEightNumber = hasEightNumber;

    if(!hasUppercase || !hasLowercase || !hasNumber || !hasEightNumber){
      this.containerMainSvgPassword.style.borderColor = this.colorBorderRed;
      this.passwordDowsNotMeetTheRequiredCriteria = true;
    }else {
      this.containerMainSvgPassword.style.borderColor = this.colorBorderBlue;
      this.passwordDowsNotMeetTheRequiredCriteria = false;
    }

    if(this.passwordConfirm !== password){
      this.containerMainSvgChangePassword.style.borderColor = this.colorBorderRed;
      this.passwordConfirmDoNotCoincideWithPasswordActual = true;
    }
  }

  onClickChangePassword(){
    if(this.passwordActual.length <= 0){
      this.passwordConfirmDoNotCoincideWithPasswordActual = true;
    }

    if(this.passwordConfirm.length <= 0){
      this.passwordDowsNotMeetTheRequiredCriteria = true;
    }

    if(!this.passwordConfirmDoNotCoincideWithPasswordActual && !this.passwordDowsNotMeetTheRequiredCriteria && this.clickRecaptcha){
      let userChange = {
        passwordCurrent: "",
        newPassword: this.passwordActual,
        idGuid: this.userId
      };

      // console.log(userChange);
      this.user_service.changePasswordUser(userChange).subscribe({
        next: (success: any) => {
          console.log(success);
          this.passwordUpdateSuccess = true;

        },
        error: error => {
          if(error.status === 400){
            this.passwordUpdateSuccess = false;
          }
        }
      });
    }
  }

  onClickInputChangePassword(){
    if(this.spanPassword){
      this.spanChangePassword.style.display = 'block';
      this.containerMainSvgChangePassword.style.padding = '2px 5px';

      if(this.containerMainSvgChangePassword.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgChangePassword.style.borderColor = this.colorBorderBlue;
      }
    }
  }

  onBlurInputChangePassword(){
    if(this.spanPassword){
      this.spanChangePassword.style.display = 'none';
      this.containerMainSvgChangePassword.style.padding = '6px 5px';

      if(this.containerMainSvgChangePassword.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgChangePassword.style.borderColor = this.colorBorderGrey;
      };
    }
  }

  onInputChangePassword(event: Event) {
    let input = event.target as HTMLInputElement;
    let password = input.value;

    this.passwordConfirm = password;

    if(this.passwordActual === password){
      this.containerMainSvgChangePassword.style.borderColor = this.colorBorderBlue;
      this.passwordConfirmDoNotCoincideWithPasswordActual = false;
    }else {
      this.containerMainSvgChangePassword.style.borderColor = this.colorBorderRed;
      this.passwordConfirmDoNotCoincideWithPasswordActual = true;
    }
  }

  onClickSendUserByLogin(){
    this.router.navigate(['/my-account/login']);
  }
}
