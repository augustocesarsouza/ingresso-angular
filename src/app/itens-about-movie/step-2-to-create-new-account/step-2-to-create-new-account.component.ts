import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CheckIfInfoUserAlreadyExsitsService } from '../service/check-if-info-user-already-exsits.service';
import { Subscription } from 'rxjs';
import { ColorsForSpan } from '../enum/colors-for-span';
import { LoginUserService } from '../../login-and-register-user/login-user.service';
import { Data } from '../../login-and-register-user/login-user/login-user.component';

@Component({
  selector: 'app-step-2-to-create-new-account',
  templateUrl: './step-2-to-create-new-account.component.html',
  styleUrl: './step-2-to-create-new-account.component.scss'
})
export class Step2ToCreateNewAccountComponent implements OnInit, AfterViewInit {
  subscriptions: Subscription[] = [];
  @Input() inputValueEmailOrCpf!: string;
  @Input() confirmationEmailNotSameEmail!: boolean;
  @Input() valueNomeInput!: string;
  @Input() valueCpfInput!: string;
  @Input() valuePhoneInput!: string;
  @Input() changeValueUserLogin!: (value: Data | null) => void;
  @Input() changeValueCodeSendForEmailCreateAccount!: (value: boolean) => void;

  valuePassword = "";
  hasUppercase = false;
  hasLowercase = false;
  hasNumber = false;
  hasEightNumber = false;
  alreadyClickedCreateAccount = false;
  errorPasswordWrong = true;
  showLoadingCicleToCreateAccountCheckout = false;
  EyeCutSvgOrEyeOpenCreateAccount = true;

  constructor(private login_user_service: LoginUserService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onInputConfirmationEmail(event: Event, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;
    let valueConfirmationEmail = input.value;

    if(this.inputValueEmailOrCpf === valueConfirmationEmail){
      this.confirmationEmailNotSameEmail = false;

      if(this.alreadyClickedCreateAccount){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGreen;
      }
    }else {
      this.confirmationEmailNotSameEmail = true;

      if(this.alreadyClickedCreateAccount){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderRed;
      }
    }
  }

  onClickInputConfirmationEmailCreateAccount(inputCpfOrEmail: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement
  ){
    if(spanNomeCreateNewAccount){
      spanNomeCreateNewAccount.style.display = 'block';
      containerInputConfirmationEmailCreateNewAccount.style.padding = '2px 5px';

      // containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderBlue;
    }
  }

  onBlurInputConfirmationEmailCreateAccount(input: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement){
    let valueInput = input.value;

    if(spanNomeCreateNewAccount){
      if(valueInput.length <= 0){
        spanNomeCreateNewAccount.style.display = 'none';
        containerInputConfirmationEmailCreateNewAccount.style.padding = '10px 5px';
      }

      if(containerInputConfirmationEmailCreateNewAccount.style.borderColor !== ColorsForSpan.colorBorderGreen && containerInputConfirmationEmailCreateNewAccount.style.borderColor !== ColorsForSpan.colorBorderRed){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGrey;
      }
    }
  }

  onClickInputPasswordCreateAccount(inputCpfOrEmail: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement,
    containerSvgPasswordCreateNewAccount: HTMLDivElement
  ){

    // containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderGrey;

    if(spanNomeCreateNewAccount){
      spanNomeCreateNewAccount.style.display = 'block';

      containerSvgPasswordCreateNewAccount.style.padding = "0px";
      containerInputConfirmationEmailCreateNewAccount.style.padding = '2px 5px';

      containerInputConfirmationEmailCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderBlue;

      // if(containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderGreen && containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderRed){
      //   containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderBlue;
      // }
    }
  }

  onBlurInputPasswordCreateAccount(input: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement,
    containerSvgPasswordCreateNewAccount: HTMLDivElement
  ){
    let valueInput = input.value;

    if(spanNomeCreateNewAccount){
      if(valueInput.length <= 0){
        spanNomeCreateNewAccount.style.display = 'none';
        containerSvgPasswordCreateNewAccount.style.padding = '10px 5px';
        containerInputConfirmationEmailCreateNewAccount.style.padding = '0px';
      }

      if(containerInputConfirmationEmailCreateNewAccount.style.borderColor !== ColorsForSpan.colorBorderGreen && containerInputConfirmationEmailCreateNewAccount.style.borderColor !== ColorsForSpan.colorBorderRed){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGrey;
      }
    }
  }

  onClickContainerSvgEyeCutCreateAccount(inputPasswordCreateNewAccount: HTMLInputElement){
    this.EyeCutSvgOrEyeOpenCreateAccount = false;

    inputPasswordCreateNewAccount.type = "text";
  }

  onClickContainerSvgEyeOpenCreateAccount(inputPasswordCreateNewAccount: HTMLInputElement){
    this.EyeCutSvgOrEyeOpenCreateAccount = true;

    inputPasswordCreateNewAccount.type = "password";
  }

  onInputPasswordCreateAccount(event: Event, spanMinimumOneLowercaseLetter:HTMLParagraphElement, spanMinimunOneUppercaseLetter:HTMLParagraphElement, spanMinimunOneNumber:HTMLParagraphElement, spanMinimunEightCharacters:HTMLParagraphElement, containerSvgPasswordCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;
    let inputValuePassword = input.value;
    this.valuePassword = inputValuePassword;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasEightNumber = false;

    if(inputValuePassword.length > 0){
      for (let i = 0; i < inputValuePassword.length; i++) {
        const caracter = inputValuePassword[i];

        if (/[A-Z]/.test(caracter)) {
          hasUppercase = true;
          spanMinimunOneUppercaseLetter.style.color = "rgb(56 195 105)";
          break;

        }else {
          hasUppercase = false;
        }

        if (hasUppercase && hasLowercase && hasNumber) {
          break;
        }
      }

      for (let i = 0; i < inputValuePassword.length; i++) {
        const caracter = inputValuePassword[i];

        if (/[a-z]/.test(caracter)) {
          hasLowercase = true;
          spanMinimumOneLowercaseLetter.style.color = "rgb(56 195 105)";
          break;
        }else {
          hasLowercase = false;
        }

        if (hasUppercase && hasLowercase && hasNumber) {
          break;
        }
      }

      for (let i = 0; i < inputValuePassword.length; i++) {
        const caracter = inputValuePassword[i];

        if (/[0-9]/.test(caracter)) {
          hasNumber = true;
          spanMinimunOneNumber.style.color = "rgb(56 195 105)";
          break;
        }else {
          hasNumber = false;
        }

        if (hasUppercase && hasLowercase && hasNumber) {
          break;
        }
      }
    }

    if(!hasUppercase){
      spanMinimunOneUppercaseLetter.style.color = "rgb(155, 155, 155)";
    }

    if(!hasLowercase){
      spanMinimumOneLowercaseLetter.style.color = "rgb(155, 155, 155)";
    }

    if(!hasNumber){
      spanMinimunOneNumber.style.color = "rgb(155, 155, 155)";
    }

    if(inputValuePassword.length >= 9){
      hasEightNumber = true;
      spanMinimunEightCharacters.style.color = "rgb(56 195 105)";
    }else {
      spanMinimunEightCharacters.style.color = "rgb(155, 155, 155)";
    }

    if(hasUppercase && hasLowercase && hasNumber && hasEightNumber){
      containerSvgPasswordCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGreen;
      this.errorPasswordWrong = false;
    }else {
      this.errorPasswordWrong = true;
      if(this.alreadyClickedCreateAccount){
        containerSvgPasswordCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderRed;
      }
    }

    this.hasUppercase = hasUppercase;
    this.hasLowercase = hasLowercase;
    this.hasNumber = hasNumber;
    this.hasEightNumber = hasEightNumber;
  }

  onClickButtonCreateAccount(containerSvgPasswordCreateNewAccount: HTMLDivElement, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement,
    buttonCreateAccountCheckout: HTMLButtonElement
  ){
    this.alreadyClickedCreateAccount = true;
    this.showLoadingCicleToCreateAccountCheckout = true;
    buttonCreateAccountCheckout.style.backgroundImage = "linear-gradient(to left, #717171, #535353)";
    buttonCreateAccountCheckout.style.color = "rgb(0 0 0)";

    if(!this.hasUppercase || !this.hasLowercase || !this.hasNumber || !this.hasEightNumber){
      containerSvgPasswordCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderRed;
    }

    if(this.confirmationEmailNotSameEmail){
      containerInputConfirmationEmailCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderRed;
    }else {
      containerInputConfirmationEmailCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGreen;
    }

    if(this.hasUppercase && this.hasLowercase && this.hasNumber && this.hasEightNumber && !this.confirmationEmailNotSameEmail){
      let objUserCreate = {
        name: this.valueNomeInput,
        email: this.inputValueEmailOrCpf,
        cpf: this.valueCpfInput,
        password: this.valuePassword,
        birthDateString: "",
        gender: "",
        phone: this.valuePhoneInput,
        cep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        referencia: "",
        bairro: "",
        estado: "",
        cidade: ""
      };

      this.login_user_service.createAccountUserCheckout(objUserCreate).subscribe((data: any) => {
        console.log(data);
        this.showLoadingCicleToCreateAccountCheckout = false;

        buttonCreateAccountCheckout.style.backgroundImage = "linear-gradient(to left, #6c04ba, #3255e2)";
        buttonCreateAccountCheckout.style.color = "rgb(255, 255, 255)";

        let dataUser = data.data;
        // this.userLogin = dataUser; // - aqui tem que ter o "ID" que acabou de criar do usuario
        this.changeValueUserLogin(dataUser);
        // this.codeSendForEmailCreateAccount = dataUser.emailSendSuccessfully;
        this.changeValueCodeSendForEmailCreateAccount(dataUser.emailSendSuccessfully);
      });
    }else {
      setTimeout(() => {
        this.showLoadingCicleToCreateAccountCheckout = false;
        buttonCreateAccountCheckout.style.backgroundImage = "linear-gradient(to left, #6c04ba, #3255e2)";
        buttonCreateAccountCheckout.style.color = "rgb(255, 255, 255)";
      }, 3000);
    }
  }
}
