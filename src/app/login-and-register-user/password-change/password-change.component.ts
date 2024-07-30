import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  containerMainSvgChangePassword!: HTMLElement;
  spanChangePassword!: HTMLElement;

  colorBorderGreen = "rgb(0, 204, 0)";
  colorBorderBlue = "#2196F3";
  colorBorderRed = "rgb(233, 74, 38)";
  colorBorderGrey = "rgb(217, 217, 217)";

  minimumOneLowercaseLetter = false;
  minimumOneUppercaseLetter = false;
  minimumOneNumber = false;
  minimumEightNumber = false;
  confirmEmailRegister = false;

  constructor(private route: ActivatedRoute){
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
        console.log(this.token); // para verificar se o token foi recebido corretamente
        document.body.style.backgroundColor = "#fff";
      }
    });

    this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
    let containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
    this.spanPassword = containerPasswordInput?.firstChild as HTMLElement;

    this.containerMainSvgChangePassword = document.querySelector('.container-svg-change-password') as HTMLElement;
    let containerChangePasswordInput = document.querySelector('.container-change-password-input') as HTMLElement;
    this.spanChangePassword = containerChangePasswordInput?.firstChild as HTMLElement;
  }

  recaptchaCallback = () => {
    console.log("recaptchaCallback");

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
      console.log("false");
      this.containerMainSvgPassword.style.borderColor = this.colorBorderRed;
    }else {
      this.containerMainSvgPassword.style.borderColor = this.colorBorderBlue;
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
  }
}
