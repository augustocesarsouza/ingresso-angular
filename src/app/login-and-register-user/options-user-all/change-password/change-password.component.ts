import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserInformationService } from '../../services/get-user-information.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  @Input() changePasswordUser: boolean = false;
  @Input() changePassword: ((value: boolean) => void) | undefined;
  minimumOneLowercaseLetter = false;
  minimumOneUppercaseLetter = false;
  minimumOneNumber = false;
  minimumEightNumber = false;
  clickedCaptcha = false;
  buttonChangePasswordElement!: HTMLElement | null;
  isValuePasswordCurrent = true;
  isValueNewPassword = false;
  isValueConfirmNewPassword = false;
  thereIsValuePasswordCurrent = false;

  passwordConfirmNewPassword: string = "";
  passwordCurrent: string = "";
  newPassword: string = "";
  passwordDoesNotMeetTheCriteira = false;
  passwordInformedWrong = false;
  passwordChangedSuccessfully = false;

  borderPasswordCurrent = "1px solid rgb(197, 197, 197)";
  borderLeftPasswordCurrent = "4px solid rgb(197, 197, 197)";
  fillColorPasswordCurrent = "rgb(189, 189, 189)";

  borderNewPassword = "1px solid rgb(197, 197, 197)";
  borderLeftNewPassword = "4px solid rgb(197, 197, 197)";
  fillColorNewPassword = "rgb(189, 189, 189)";

  borderConfirmNewPassword = "1px solid rgb(197, 197, 197)";
  borderLeftConfirmNewPassword = "4px solid rgb(197, 197, 197)";
  fillColorConfirmNewPassword = "rgb(189, 189, 189)";

  private timeoutId: any;

  constructor(private getUserInformationService: GetUserInformationService, private router: Router){
  }

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => {
      if(typeof document !== 'undefined'){
        this.buttonChangePasswordElement = document.querySelector(".button-change-password");
      }
    }, 10);

    this.onPasswordInput = this.onPasswordInput.bind(this);
    this.onPasswordCurrent = this.onPasswordCurrent.bind(this);
    this.onPasswordInputConfirmYourNewPassword = this.onPasswordInputConfirmYourNewPassword.bind(this);
  }

  onClickCloseModalPasswordChanged(){
    this.passwordChangedSuccessfully = false;

    this.onClickUserChangedPassword();
  }

  onCaptchaResolved(captchaResponse: string | null) {
    this.clickedCaptcha = true;

    if(this.minimumOneLowercaseLetter && this.minimumOneUppercaseLetter && this.minimumOneNumber && this.minimumEightNumber && this.clickedCaptcha && !this.isValueConfirmNewPassword && this.thereIsValuePasswordCurrent){
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "painted";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(52, 120, 193)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(52, 120, 193)";
      }
    }else {
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "none";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(221, 221, 221)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(221, 221, 221)";
      }
    }
  }

  onPasswordCurrent(password: string){
    this.passwordInformedWrong = false;
    this.passwordCurrent = password;

    if(password.length > 0){
      this.isValuePasswordCurrent = true;
      this.thereIsValuePasswordCurrent = true;
      this.borderPasswordCurrent = "1px solid rgb(197, 197, 197)";
      this.borderLeftPasswordCurrent = "4px solid rgb(197, 197, 197)";
      this.fillColorPasswordCurrent = "rgb(189, 189, 189)";
    }else {
      this.isValuePasswordCurrent = false;
      this.thereIsValuePasswordCurrent = false;
      this.borderPasswordCurrent = "1px solid rgb(217, 83, 79)";
      this.borderLeftPasswordCurrent = "4px solid rgb(217, 83, 79)";
      this.fillColorPasswordCurrent = "rgb(217, 83, 79)";
    }

    if(this.minimumOneLowercaseLetter && this.minimumOneUppercaseLetter && this.minimumOneNumber && this.minimumEightNumber && this.clickedCaptcha && !this.isValueConfirmNewPassword && this.thereIsValuePasswordCurrent){
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "painted";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(52, 120, 193)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(52, 120, 193)";
      }
    }else {
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "none";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(221, 221, 221)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(221, 221, 221)";
      }
    }
  }

  onPasswordInput(password: string): void {
    this.newPassword = password;

    if(this.passwordConfirmNewPassword === password){
      this.isValueConfirmNewPassword = false;
      this.borderConfirmNewPassword = "1px solid rgb(197, 197, 197)";
      this.borderLeftConfirmNewPassword = "4px solid rgb(197, 197, 197)";
      this.fillColorConfirmNewPassword = "rgb(189, 189, 189)";
    }else {
      this.isValueConfirmNewPassword = true;
      this.borderConfirmNewPassword = "1px solid rgb(217, 83, 79)";
      this.borderLeftConfirmNewPassword = "4px solid rgb(217, 83, 79)";
      this.fillColorConfirmNewPassword = "rgb(217, 83, 79)";
    }

    if(password.length > 0){
      this.isValueNewPassword = false;
      this.borderNewPassword = "1px solid rgb(197, 197, 197)";
      this.borderLeftNewPassword = "4px solid rgb(197, 197, 197)";
      this.fillColorNewPassword = "rgb(189, 189, 189)";
    }else {
      this.isValueNewPassword = true;
      this.borderNewPassword = "1px solid rgb(217, 83, 79)";
      this.borderLeftNewPassword = "4px solid rgb(217, 83, 79)";
      this.fillColorNewPassword = "rgb(217, 83, 79)";
    }

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
    }else {
      this.passwordDoesNotMeetTheCriteira = false;
      this.isValueNewPassword = true;

    }

    if(password.length >= 9){
      hasEightNumber = true;
    }

    this.minimumOneUppercaseLetter = hasUppercase;
    this.minimumOneLowercaseLetter = hasLowercase;
    this.minimumOneNumber = hasNumber;
    this.minimumEightNumber = hasEightNumber;

    if(this.minimumOneLowercaseLetter && this.minimumOneUppercaseLetter && this.minimumOneNumber && this.minimumEightNumber){
      this.passwordDoesNotMeetTheCriteira = false;

      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "painted";
      }
    }else {
      if(password.length > 0){
        this.passwordDoesNotMeetTheCriteira = true;
      }
      this.borderNewPassword = "1px solid rgb(217, 83, 79)";
      this.borderLeftNewPassword = "4px solid rgb(217, 83, 79)";
      this.fillColorNewPassword = "rgb(217, 83, 79)";
    }

    if(this.minimumOneLowercaseLetter && this.minimumOneUppercaseLetter && this.minimumOneNumber && this.minimumEightNumber && this.clickedCaptcha && !this.isValueConfirmNewPassword && this.thereIsValuePasswordCurrent){
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "painted";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(52, 120, 193)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(52, 120, 193)";
      }
    }else {
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "none";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(221, 221, 221)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(221, 221, 221)";
      }
    }
  }

  onPasswordInputConfirmYourNewPassword(password: string){
    this.passwordConfirmNewPassword = password;

    if(this.newPassword === password){
      this.isValueConfirmNewPassword = false;
      this.borderConfirmNewPassword = "1px solid rgb(197, 197, 197)";
      this.borderLeftConfirmNewPassword = "4px solid rgb(197, 197, 197)";
      this.fillColorConfirmNewPassword = "rgb(189, 189, 189)";
    }else {
      this.isValueConfirmNewPassword = true;
      this.borderConfirmNewPassword = "1px solid rgb(217, 83, 79)";
      this.borderLeftConfirmNewPassword = "4px solid rgb(217, 83, 79)";
      this.fillColorConfirmNewPassword = "rgb(217, 83, 79)";
    }

    if(this.minimumOneLowercaseLetter && this.minimumOneUppercaseLetter && this.minimumOneNumber && this.minimumEightNumber && this.clickedCaptcha && !this.isValueConfirmNewPassword && this.thereIsValuePasswordCurrent){
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "painted";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(52, 120, 193)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(52, 120, 193)";
      }
    }else {
      if(this.buttonChangePasswordElement){
        this.buttonChangePasswordElement.style.pointerEvents = "none";
        this.buttonChangePasswordElement.style.backgroundColor = "rgb(221, 221, 221)";
        this.buttonChangePasswordElement.style.color = "rgb(255, 255, 255)";
        this.buttonChangePasswordElement.style.border = "1px solid rgb(221, 221, 221)";
      }
    }
  }

  onClickBack(event: MouseEvent){
    event.preventDefault();
  }

  onClickChangePassword(event: MouseEvent){
    event.preventDefault();

    if(this.minimumOneLowercaseLetter && this.minimumOneUppercaseLetter && this.minimumOneNumber && this.minimumEightNumber && this.clickedCaptcha && !this.isValueConfirmNewPassword && this.thereIsValuePasswordCurrent){
      let userLogin = null;

      if(typeof window !== "undefined"){
        userLogin = localStorage.getItem("userLogin");
      }

      if(userLogin){
        let userLoginObj: any = JSON.parse(userLogin);

        const userChangePassword = {
          passwordCurrent: this.passwordCurrent,
          newPassword: this.newPassword,
          idGuid: userLoginObj.id
        }

        this.getUserInformationService.changePasswordUser(userChangePassword)
        .subscribe({
            next: (data: any) => {
              this.passwordChangedSuccessfully = true;
            },
            error: (error: any) => {
              if(error.status === 401){
                this.passwordInformedWrong = true;
                this.borderPasswordCurrent = "1px solid rgb(217, 83, 79)";
                this.borderLeftPasswordCurrent = "4px solid rgb(217, 83, 79)";
                this.fillColorPasswordCurrent = "rgb(217, 83, 79)";
              }

              if(error.status === 403){
                this.throwError403Forbidden(error);
              }
            }
          });
      }
    }else {
      // não validado
    }
  }

  onClickUserChangedPassword(){
    if(typeof window !== "undefined"){
      localStorage.removeItem("userLogin");
      this.router.navigate(['/my-account/login']);
      this.passwordChangedSuccessfully = false;
    }
  }

  throwError403Forbidden(status: any){
    if(status.status === 403){
      if(typeof window !== "undefined"){
        localStorage.removeItem("userLogin");
      }
      this.router.navigate(['/my-account/login']);
    }
  }

  ngOnDestroy(): void {
    if(this.timeoutId){
      clearTimeout(this.timeoutId);
    }
  }
}
