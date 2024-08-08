import { AfterViewInit, Component, ElementRef, Input, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { Data, ErrorObj } from '../../login-and-register-user/login-user/login-user.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginUserService } from '../../login-and-register-user/login-user.service';
import { UserService } from '../service/user.service';
import { DataService } from '../../login-and-register-user/data.service';
import { CheckIfInfoUserAlreadyExsitsService } from '../service/check-if-info-user-already-exsits.service';

interface CheckExistsEmail {
  userExists: boolean;
}

interface CheckExistsCpf {
  cpfExists: boolean;
}

@Component({
  selector: 'app-modal-login-checkout',
  templateUrl: './modal-login-checkout.component.html',
  styleUrl: './modal-login-checkout.component.scss'
})
export class ModalLoginCheckoutComponent implements AfterViewInit, OnDestroy {
  @Input() funcionCloseModal!: () => void;
  @Input() funcionaCodeConfirmedForTheUser!: (value: boolean) => void;
  subscriptions: Subscription[] = [];

  inputValueEmailOrCpf = "";
  // inputValuePassword = "";
  errorInputEmailOrCpfNotHaveValueRight = false;
  showLoadingCicle = false;
  showLoadingCicleToCreateAccount = false;
  showLoadingCicleToCreateAccountCheckout = false;
  cpfNotExist = false;
  showStep2CreateAccount = false;

  AccountExist = false;
  alreadyClickedContinue = false;
  clickTroubleLoggingIn = false;
  clickCreateNewAccount = false;
  showInsertCpfOrEmail = true;
  showInputEmailUser = false;
  EyeCutSvgOrEyeOpen = true;
  EyeCutSvgOrEyeOpenCreateAccount = true;

  valueForEmailChooseForUser = "tuinmoto7@gmail.com";
  valueForCpfChooseForUser = "";

  containerMainSvgInput!: HTMLElement;
  spanCpfOrEmail!: HTMLElement;

  containerPasswordInput!: HTMLElement;
  containerMainSvgPassword!: HTMLElement;
  spanPassword!: HTMLElement;
  inputPassword!: HTMLInputElement;
  buttonContinue!: HTMLElement;

  settimeOutAny: any;
  settimeOutAnyColor: any;
  settimeOutAnyLogin: any;
  settimeOutLoadingCicle: any;
  settimeOutSpanCpfNotExist: any;
  settimeOutButtonContinue: any;
  settimeOutInputNotHaveValue: any;
  settimeOutInputPassword: any;
  timeoutErrorLoginUser: any;

  colorBorderGreen = "rgb(0, 204, 0)";
  colorBorderBlue = "#2196F3";
  colorBorderRed = "rgb(233, 74, 38)";
  colorBorderGrey = "rgb(217, 217, 217)";

  @ViewChildren('input0, input1, input2, input3, input4, input5') inputs!: QueryList<ElementRef>;
  userLogin!: Data | null;
  invalidUsernamePasswordOrCode: { value: boolean } = { value: false };
  inputNotAllHasValue = false;
  codeSendForEmailConfirmedLogin = false;
  showModalForLogin = false;
  tokenEmailSendToEmail = false;

  spanNomeErrorCreateNewAccount = false;
  spanPhoneErrorCreateNewAccount = false;
  spanCpfErrorCreateNewAccount = false;

  valueNomeInput = "";
  valuePhoneInput = "";
  valuePhoneInputToSave = "";
  valueCpfInput = "";
  valuePassword = "";
  valurCpfInput = "";

  @ViewChildren('inputCreate0, inputCreate1, inputCreate2, inputCreate3, inputCreate4, inputCreate5') inputsCreateAccount!: QueryList<ElementRef>;
  confirmationEmailNotSameEmail = true;
  codeSendForEmailCreateAccount = false;
  codeSendToEmailLoginAccount = false;
  inputNotAllHasValueCreateAccount = false;
  codeSentToEmail = false;
  showModalToUrlSentToEmail = false;

  constructor(private router: Router, private loginUserService: LoginUserService, private UserService: UserService, private dataService: DataService,
    private check_if_info_user_already_exsits_service: CheckIfInfoUserAlreadyExsitsService, private login_user_service: LoginUserService){
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < this.inputs.length - 1) {
      this.inputs.toArray()[index + 1].nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number){
    const input = event.target as HTMLInputElement;

    if(event.key === 'Backspace' && index > 0){
      this.inputs.toArray()[index - 1].nativeElement.focus();
    }
  }

  ngAfterViewInit(): void {
    if(typeof document === 'undefined') return;

    let modalFooter = document.querySelector(".modal-footer") as HTMLElement;

    if(modalFooter){
      this.buttonContinue = modalFooter.lastChild as HTMLElement;
    }

    this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
    let containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
    this.spanCpfOrEmail = containerSpanAndInput?.firstChild as HTMLElement;

    this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
    this.containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
    this.spanPassword = this.containerPasswordInput?.firstChild as HTMLElement;
  }

  updateProperties(){
    clearTimeout(this.settimeOutAny);

    this.settimeOutAny = setTimeout(() => {
      this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
      let containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
      this.spanCpfOrEmail = containerSpanAndInput?.firstChild as HTMLElement;
    }, 50);
  }

  updatePropertiesLogin(){
    clearTimeout(this.settimeOutAnyLogin);

    this.settimeOutAnyLogin = setTimeout(() => {
      this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
      this.containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
      this.spanPassword = this.containerPasswordInput?.firstChild as HTMLElement;
    }, 50);
  }

  updatePropertiesButtonContinue(){
    clearTimeout(this.settimeOutButtonContinue);

    this.settimeOutButtonContinue = setTimeout(() => {
      let modalFooter = document.querySelector(".modal-footer") as HTMLElement;
      this.buttonContinue = modalFooter.lastChild as HTMLElement;
    }, 50);
  }

  updateProprietieInputPassword(){
    clearTimeout(this.settimeOutAny);

    this.settimeOutAny = setTimeout(() => {
      this.inputPassword = document.querySelector('.input-password-send-code') as HTMLInputElement;
    });
  }

  onClickCloseEnterUser(){
    // this.mostrarMeuModalProprio = false;
    this.funcionCloseModal();
    this.AccountExist = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.errorInputEmailOrCpfNotHaveValueRight= false;
    this.EyeCutSvgOrEyeOpen = true;

    this.clickTroubleLoggingIn = false;
    this.alreadyClickedContinue = false;

    this.updateProperties();

    if(this.containerMainSvgInput){
      this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
    }

    this.valueForEmailChooseForUser = "";
    this.inputValueEmailOrCpf = "";

    let inputCpfEmail = document.querySelector(".input-cpf-email") as HTMLInputElement;
    if(inputCpfEmail){
      inputCpfEmail.value = "";
    }
  }

  onClickInputCpfOrEmail(){
    if(this.spanCpfOrEmail){
      this.spanCpfOrEmail.style.display = 'block';

      this.containerMainSvgInput.style.padding = '1px 5px';

      if(this.containerMainSvgInput.style.borderColor !== this.colorBorderGreen && this.containerMainSvgInput.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgInput.style.borderColor = this.colorBorderBlue;
      }
    }
  }

  onBlurInputCpfOrEmail(){
    if(this.spanCpfOrEmail){
      this.spanCpfOrEmail.style.display = 'none';
      this.containerMainSvgInput.style.padding = '6px 5px';

      if(this.containerMainSvgInput.style.borderColor !== this.colorBorderGreen && this.containerMainSvgInput.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
      }
    }
  }

  onInputCpfEmail(event: Event) {
    let input = event.target as HTMLInputElement;
    this.inputValueEmailOrCpf = input.value;

    if(input.value.includes("@") && input.value.includes(".com") && this.containerMainSvgInput){
      this.containerMainSvgInput.style.borderColor = this.colorBorderGreen;
      this.errorInputEmailOrCpfNotHaveValueRight = false;
    }else {
      if(this.containerMainSvgInput && this.containerMainSvgInput.style.borderColor !== this.colorBorderGreen && this.containerMainSvgInput.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
      }
    }

    if(this.inputValueEmailOrCpf.length <= 0){
      this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
    }
  }

  onClickInputCreateAccount(inputCpfOrEmail: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputNomeCreateNewAccount: HTMLDivElement,
    containerInputPhoneCreateNewAccount: HTMLDivElement, containerInputCpfCreateNewAccount: HTMLDivElement
  ){
    this.spanNomeErrorCreateNewAccount = false;
    this.spanPhoneErrorCreateNewAccount = false;
    this.spanCpfErrorCreateNewAccount = false;

    containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderGrey;
    containerInputPhoneCreateNewAccount.style.borderColor = this.colorBorderGrey;
    containerInputCpfCreateNewAccount.style.borderColor = this.colorBorderGrey;

    if(spanNomeCreateNewAccount){
      spanNomeCreateNewAccount.style.display = 'block';

      containerInputNomeCreateNewAccount.style.padding = '2px 5px';

      containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderBlue;

      // if(containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderGreen && containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderRed){
      //   containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderBlue;
      // }
    }
  }

  onBlurInputCreateAccount(input: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputNomeCreateNewAccount: HTMLDivElement){
    let valueInput = input.value;

    if(spanNomeCreateNewAccount){
      if(valueInput.length <= 0 || valueInput.replace(/[_\.\-\(\)]/g, '').length <= 0){
        spanNomeCreateNewAccount.style.display = 'none';
        containerInputNomeCreateNewAccount.style.padding = '10px 5px';
      }

      if(containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderGreen && containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderRed){
        containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderGrey;
      }
    }
  }

  onInputConfirmationEmail(event: Event, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;
    let valueConfirmationEmail = input.value;

    if(this.inputValueEmailOrCpf === valueConfirmationEmail){
      this.confirmationEmailNotSameEmail = false;

      if(this.alreadyClickedCreateAccount){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderGreen;
      }
    }else {
      this.confirmationEmailNotSameEmail = true;

      if(this.alreadyClickedCreateAccount){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderRed;
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

      if(containerInputConfirmationEmailCreateNewAccount.style.borderColor !== this.colorBorderGreen && containerInputConfirmationEmailCreateNewAccount.style.borderColor !== this.colorBorderRed){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderGrey;
      }
    }
  }

  onInputNameCreateAccount(event: Event, containerInputCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;

    this.valueNomeInput = input.value;
  }

  onInputCpfCreateAccount(event: Event, containerInputCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;
    let valurInputCpf = input.value;

    this.valueCpfInput = valurInputCpf;

    if(valurInputCpf.length <= 0){
      this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
    }
  }

  onInputPhoneCreateAccount(event: Event, containerInputCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;
    let valurInputPhone = input.value;

    this.valuePhoneInput = valurInputPhone;

    if(valurInputPhone.length <= 0){
      this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
    }
  }

  podeMandarParaBackandTestarCpf = false;

  onClickContinueCreateAccount(buttonContinueCreateAccount: HTMLButtonElement, inputNomeCreateNewAccount: HTMLInputElement, inputCpfCreateNewAccount: HTMLInputElement,
    inputPhoneCreateNewAccount: HTMLInputElement, containerInputNomeCreateNewAccount:HTMLDivElement, containerInputPhoneCreateNewAccount: HTMLDivElement,
    containerInputCpfCreateNewAccount: HTMLDivElement){

    let valueNomeInput = inputNomeCreateNewAccount.value;
    let valuePhoneInput = inputPhoneCreateNewAccount.value;
    let valurCpfInput = inputCpfCreateNewAccount.value;

    let regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if(!regex.test(valurCpfInput)){
      containerInputCpfCreateNewAccount.style.borderColor = this.colorBorderRed;
      this.spanCpfErrorCreateNewAccount = true;
      this.podeMandarParaBackandTestarCpf = false;
    }

    if(valuePhoneInput.replace(/[_\.\-\(\)]/g, '').length < 11){
      containerInputPhoneCreateNewAccount.style.borderColor = this.colorBorderRed;
      this.spanPhoneErrorCreateNewAccount = true;
      this.podeMandarParaBackandTestarCpf = false;
    }

    if(valueNomeInput.length < 3 || valueNomeInput.includes("@")){
      containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderRed;
      this.spanNomeErrorCreateNewAccount = true;
      this.podeMandarParaBackandTestarCpf = false;
    }

    if(regex.test(valurCpfInput) && valuePhoneInput.replace(/[_\.\-\(\)]/g, '').length >= 11 && valueNomeInput.length >= 3 && !valueNomeInput.includes("@")){
      this.podeMandarParaBackandTestarCpf = true;
    }

    if(!this.podeMandarParaBackandTestarCpf) return;
    if(this.showLoadingCicleToCreateAccount === true) return;

    this.valueNomeInput = valueNomeInput;
    this.valuePhoneInput = valuePhoneInput;
    this.valuePhoneInputToSave = valuePhoneInput;
    this.valurCpfInput = valurCpfInput;

    this.showLoadingCicleToCreateAccount = true;
    buttonContinueCreateAccount.style.backgroundImage = "linear-gradient(to left, rgb(102, 102, 102), rgb(102, 102, 102))";
    buttonContinueCreateAccount.style.color = "rgb(0 0 0)";

    clearTimeout(this.settimeOutLoadingCicle);
    clearTimeout(this.settimeOutSpanCpfNotExist);

    this.subscriptions.push(this.check_if_info_user_already_exsits_service.checkIfCpfAlreadyExists(valurCpfInput).subscribe((data: any) => {
      this.settimeOutLoadingCicle = setTimeout(() => {
        let result: CheckExistsCpf = data.data;
        console.log(result);

        this.showLoadingCicleToCreateAccount = false;
        this.cpfNotExist = result.cpfExists;

        if(result.cpfExists){
          this.settimeOutSpanCpfNotExist = setTimeout(() => {
            this.cpfNotExist = false;
          }, 3000);
        }

        if(!result.cpfExists){
          this.showStep2CreateAccount = !result.cpfExists;
          containerInputCpfCreateNewAccount.style.borderColor = this.colorBorderGreen;
          this.clickCreateNewAccount = false;
        }

        buttonContinueCreateAccount.style.backgroundImage = "linear-gradient(to left, #6c04ba, #3255e2)";
        buttonContinueCreateAccount.style.color = "rgb(255, 255, 255)";
      }, 2000);
    }));
  }

  onClickContinue(){
    if(typeof document === 'undefined') return;

    this.updateProprietieInputPassword();

    if(!this.inputValueEmailOrCpf.includes("@") || !this.inputValueEmailOrCpf.includes(".com") && this.containerMainSvgInput){
      this.containerMainSvgInput.style.borderColor = this.colorBorderRed;
      this.errorInputEmailOrCpfNotHaveValueRight = true;
    }

    if(this.inputValueEmailOrCpf.includes("@") && this.inputValueEmailOrCpf.includes(".com")){
      this.showLoadingCicle = true;
      this.buttonContinue.style.backgroundImage = "linear-gradient(to left, rgb(102, 102, 102), rgb(102, 102, 102))";
      this.buttonContinue.style.color = "rgb(0 0 0)";

      clearTimeout(this.settimeOutLoadingCicle);

      this.subscriptions.push(this.check_if_info_user_already_exsits_service.checkIfEmailAlreadyExists(this.inputValueEmailOrCpf).subscribe((data: any) => {
        this.settimeOutLoadingCicle = setTimeout(() => {
          let result: CheckExistsEmail = data.data;

          this.AccountExist = result.userExists;
          this.alreadyClickedContinue = true;

          this.showInsertCpfOrEmail = false;
          this.showInputEmailUser = true;
          this.showLoadingCicle = false;

          this.updatePropertiesLogin();

          let inputCpfEmail = document.querySelector(".input-cpf-email") as HTMLInputElement;
          this.valueForEmailChooseForUser = inputCpfEmail.value;
        }, 1000);
      }));
    }

    clearTimeout(this.settimeOutInputPassword);

    this.settimeOutInputPassword = setTimeout(() => {
      this.inputPassword = document.querySelector('.input-password-send-code') as HTMLInputElement;
    }, 1500);
  }

  onClickChangeEmail(){
    this.AccountExist = false;
    this.alreadyClickedContinue = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.valueForEmailChooseForUser = this.inputValueEmailOrCpf;
    this.EyeCutSvgOrEyeOpen = true;

    this.updatePropertiesButtonContinue();

    this.updateProperties();

    clearTimeout(this.settimeOutAnyColor);
    this.settimeOutAnyColor = setTimeout(() => {
      if(this.containerMainSvgInput){
        this.containerMainSvgInput.style.borderColor = this.colorBorderGreen;
      }
      this.errorInputEmailOrCpfNotHaveValueRight= false;
    }, 50);
  }

  onClickCreateNewAccount(){
    this.clickCreateNewAccount = true;
    this.alreadyClickedContinue = false;
    this.showInputEmailUser = false;

    import('inputmask').then(Inputmask => {
      let inputCpfCreateAccount = document.getElementById('input-cpf-create-account');
      let inputPhoneCreateAccount = document.getElementById('input-phone-create-account');

      if (inputCpfCreateAccount) {
        let mask = new Inputmask.default({
          mask: "999.999.999-99",
          placeholder: "___.___.___-__",
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCpfCreateAccount);
      }

      if (inputPhoneCreateAccount) {
        let mask = new Inputmask.default({
          mask: "(99)99999-9999",
          placeholder: "(__)_____-____",
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputPhoneCreateAccount);
      }
    });
  }

  onClickContainerSvgArrowCreateAccount(){
    this.clickCreateNewAccount = false;
    this.alreadyClickedContinue = true;
    this.showInputEmailUser = true;
    this.cpfNotExist = false;

    this.valueNomeInput = "";
    this.valuePhoneInput = "";
    this.valuePhoneInputToSave = "";
    this.valueCpfInput = "";
  }

  onClickContainerSvgArrowStep2CreateAccount(){
    this.clickCreateNewAccount = true;
    this.alreadyClickedContinue = false;
    this.showStep2CreateAccount = false;
    this.showInputEmailUser = false;

    import('inputmask').then(Inputmask => {
      let inputCpfCreateAccount = document.getElementById('input-cpf-create-account');
      let inputPhoneCreateAccount = document.getElementById('input-phone-create-account');

      if (inputCpfCreateAccount) {
        let mask = new Inputmask.default({
          mask: "999.999.999-99",
          placeholder: "___.___.___-__",
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCpfCreateAccount);
      }

      if (inputPhoneCreateAccount) {
        let mask = new Inputmask.default({
          mask: "(99)99999-9999",
          placeholder: "(__)_____-____",
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputPhoneCreateAccount);
      }
    });
  }

  onClickContainerSvgArrowPayment(){
    if(typeof document === 'undefined') return;

    this.AccountExist = false;
    this.alreadyClickedContinue = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.valueForEmailChooseForUser = this.inputValueEmailOrCpf;
    this.EyeCutSvgOrEyeOpen = true;

    this.updatePropertiesButtonContinue();
    this.updateProperties();

    clearTimeout(this.settimeOutAnyColor);
    this.settimeOutAnyColor = setTimeout(() => {
      if(this.containerMainSvgInput){
        this.containerMainSvgInput.style.borderColor = this.colorBorderGreen;
      }
      this.errorInputEmailOrCpfNotHaveValueRight= false;
    }, 50);
  }

  onClickEnterAsClient(){
    if(typeof document === "undefined") return;

    let inputPassword = document.querySelector(".input-password-send-code") as HTMLInputElement;

    let valueCpfOrEmail = this.valueForEmailChooseForUser;
    let valuePassword = inputPassword.value;

    this.loginUserService.loginUser(valueCpfOrEmail, valuePassword)
    .subscribe({
      next: (success: any) => {
        console.log(success);

        let user = success.data;

        if(user.confirmEmail && !user.confirmEmail){
          this.showModalToUrlSentToEmail = true;
        }

        if(user.codeSentSuccessfullyEmail){
          this.userLogin = user;
          this.codeSendToEmailLoginAccount = user.codeSentSuccessfullyEmail;

          if(user.confirmEmail){
            this.codeSendForEmailConfirmedLogin = true;
          }
        }
      },
      error: error => {
        console.log(error);

        if(error.status === 400){
          this.invalidUsernamePasswordOrCode.value = true;

          if(this.timeoutErrorLoginUser){
            clearTimeout(this.timeoutErrorLoginUser);
          }

          this.timeoutErrorLoginUser = setTimeout(() => {
            this.invalidUsernamePasswordOrCode.value = false;
          }, 3000);
        }

        const errorObj: ErrorObj = error.error;

        if(errorObj.typeMessage === "email"){
          this.userLogin = errorObj.data;
          // this.confirmEmailRegister = true;
        }
      }
    });
  }

  onClickContinueConfirmEmailEmail(){
    this.showModalToUrlSentToEmail = false;

  }

  onClickSvgExitConfirmEmailEmail(){
    this.showModalToUrlSentToEmail = false;
  }

  onClickInputPasswordCreateAccount(inputCpfOrEmail: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement,
    containerSvgPasswordCreateNewAccount: HTMLDivElement
  ){

    // containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderGrey;

    if(spanNomeCreateNewAccount){
      spanNomeCreateNewAccount.style.display = 'block';

      containerSvgPasswordCreateNewAccount.style.padding = "0px";
      containerInputConfirmationEmailCreateNewAccount.style.padding = '2px 5px';

      containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderBlue;

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

      if(containerInputConfirmationEmailCreateNewAccount.style.borderColor !== this.colorBorderGreen && containerInputConfirmationEmailCreateNewAccount.style.borderColor !== this.colorBorderRed){
        containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderGrey;
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

  onClickInputPassword(){
    if(this.spanPassword){
      this.spanPassword.style.display = 'block';
      this.containerMainSvgPassword.style.padding = '2px 5px';

      if(this.containerMainSvgPassword.style.borderColor !== this.colorBorderGreen){
        this.containerMainSvgPassword.style.borderColor = this.colorBorderBlue;
      }
    }
  }

  onBlurInputPassword(){
    if(this.spanPassword){
      this.spanPassword.style.display = 'none';
      this.containerMainSvgPassword.style.padding = '6px 5px';

      if(this.containerMainSvgPassword.style.borderColor !== this.colorBorderGreen){
        this.containerMainSvgPassword.style.borderColor = this.colorBorderGrey;
      };
    }
  }

  onInputPassword(event: Event){
    let input = event.target as HTMLInputElement;
  }

  hasUppercase = false;
  hasLowercase = false;
  hasNumber = false;
  hasEightNumber = false;
  alreadyClickedCreateAccount = false;
  errorPasswordWrong = true;

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
      containerSvgPasswordCreateNewAccount.style.borderColor = this.colorBorderGreen;
      this.errorPasswordWrong = false;
    }else {
      this.errorPasswordWrong = true;
      if(this.alreadyClickedCreateAccount){
        containerSvgPasswordCreateNewAccount.style.borderColor = this.colorBorderRed;
      }
    }

    this.hasUppercase = hasUppercase;
    this.hasLowercase = hasLowercase;
    this.hasNumber = hasNumber;
    this.hasEightNumber = hasEightNumber;
  }

  onClickContainerSvgEyeCut(){
    this.EyeCutSvgOrEyeOpen = false;

    this.inputPassword.type = "text";
  }

  onClickContainerSvgEyeOpen(){
    this.EyeCutSvgOrEyeOpen = true;

    this.inputPassword.type = "password";
  }

  onClickButtonCreateAccount(containerSvgPasswordCreateNewAccount: HTMLDivElement, containerInputConfirmationEmailCreateNewAccount: HTMLDivElement,
    buttonCreateAccountCheckout: HTMLButtonElement
  ){
    this.alreadyClickedCreateAccount = true;
    this.showLoadingCicleToCreateAccountCheckout = true;
    buttonCreateAccountCheckout.style.backgroundImage = "linear-gradient(to left, #717171, #535353)";
    buttonCreateAccountCheckout.style.color = "rgb(0 0 0)";

    if(!this.hasUppercase || !this.hasLowercase || !this.hasNumber || !this.hasEightNumber){
      containerSvgPasswordCreateNewAccount.style.borderColor = this.colorBorderRed;
    }

    if(this.confirmationEmailNotSameEmail){
      containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderRed;
    }else {
      containerInputConfirmationEmailCreateNewAccount.style.borderColor = this.colorBorderGreen;
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

        // tenta fazer o REENVIAR CODE DE EMAIL AMANHA e "SE NÃO CONFIRMAR O CODE E Mudar no banco de dados que foi confirmado o email"
        // Tem que avisar o usuario tipo quando ele for se logar "FALAR QUE ELE TEM QUE CONFIRMAR O EMAIL MANDANDO O CODIGO NO EMAIL DELE NOVAMENTE"
        let dataUser = data.data;
        this.userLogin = dataUser; // - aqui tem que ter o "ID" que acabou de criar do usuario
        this.codeSendForEmailCreateAccount = dataUser.emailSendSuccessfully;
      });
    }
  }

  onClickSvgExitCodeEmail(){
    this.codeSendForEmailConfirmedLogin = !this.codeSendForEmailConfirmedLogin;
  }

  onClickSvgExitCodeEmailCreateAccount(){
    this.codeSendForEmailCreateAccount = !this.codeSendForEmailCreateAccount;
  }

  onInputCreateAccount(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < this.inputsCreateAccount.length - 1) {
      this.inputsCreateAccount.toArray()[index + 1].nativeElement.focus();
    }
  }

  onKeyDownCreateAccount(event: KeyboardEvent, index: number){
    const input = event.target as HTMLInputElement;

    if(event.key === 'Backspace' && index > 0){
      this.inputsCreateAccount.toArray()[index].nativeElement.value = "";
      event.preventDefault();
      this.inputsCreateAccount.toArray()[index - 1].nativeElement.focus();
    }
  }

  onClickResendCodeCreateAccount(){
    // this.userLogin.id
    if(this.userLogin === null) return;

    this.login_user_service.resendCodeEmailCheckout(this.userLogin.id).subscribe({
      next: (data: any) => {
        console.log(data);

        this.codeSentToEmail = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    });;
  }

  onClickContinueCodeCreateAccount(){
    let inputWithValue = 0;
    let inputValue = "";

    this.inputsCreateAccount.toArray().forEach((el: ElementRef<HTMLInputElement>) => {
      if(el.nativeElement.value.length > 0){
        inputWithValue++;
        inputValue += el.nativeElement.value;
      }
    });

    if(inputWithValue < this.inputsCreateAccount.length){
      this.inputNotAllHasValueCreateAccount = true;

      // this.inputNotAllHasValueCreateAccount = false;
    }else {
      if(this.userLogin === null) return;

      this.inputNotAllHasValueCreateAccount = false;

      let valueInput = inputValue;
      let idUser = this.userLogin.id;

      if(this.codeSendForEmailCreateAccount){
        this.login_user_service.verifyConfirmedUserEmail(valueInput, idUser).subscribe({
          next: (data: any) => {
            console.log(data);

            this.codeSendForEmailConfirmedLogin = false;
            // this.codeConfirmedForTheUser = true;
            this.funcionaCodeConfirmedForTheUser(true);
            this.dataService.setData(this.userLogin);
            setTimeout(() => {
              // this.mostrarMeuModalProprio = false;
              this.funcionCloseModal();
            }, 1000);
          },
          error: (error: any) => {
            console.log(error);
            this.codeSendForEmailConfirmedLogin = false;
            this.invalidUsernamePasswordOrCode.value = true;

            this.dataService.setData(null);
            this.userLogin = null;
          }
        });
      }

      if(this.codeSendToEmailLoginAccount){
        this.login_user_service.verifyCodeLoginUser(valueInput, idUser).subscribe({
          next: (data: any) => {
            console.log(data);

            this.codeSendToEmailLoginAccount = false;
            // this.codeConfirmedForTheUser = true;
            this.funcionaCodeConfirmedForTheUser(true);
            this.dataService.setData(this.userLogin);
            setTimeout(() => {
              // this.mostrarMeuModalProprio = false;
              this.funcionCloseModal();
            }, 1000);
          },
          error: (error: any) => {
            console.log(error);
            this.codeSendForEmailConfirmedLogin = false;
            this.invalidUsernamePasswordOrCode.value = true;

            this.dataService.setData(null);
            this.userLogin = null;
          }
        });
      }
    }
  }

  onClickResendCode(){

  }

  async onClickContinueCode(){
    let inputWithValue = 0;
    let inputValue = "";

    this.inputs.toArray().forEach((el: ElementRef<HTMLInputElement>) => {
      if(el.nativeElement.value.length > 0){
        inputWithValue++;
        inputValue += el.nativeElement.value;
      }
    });

    if(inputWithValue < this.inputs.length){
      this.inputNotAllHasValue = true;

      this.inputNotAllHasValue = false;
    }else {
      if(this.userLogin === null) return;

      this.inputNotAllHasValue = false;

      let valueInput = inputValue;
      let idUser = this.userLogin.id;

      const res = await fetch(`/api/v1/public/user/verific/${valueInput}/${idUser}`);

      if(res.status === 200){
        this.codeSendForEmailConfirmedLogin = false;
        // this.codeConfirmedForTheUser = true;
        this.funcionaCodeConfirmedForTheUser(true);
        this.dataService.setData(this.userLogin);
        setTimeout(() => {
          // this.mostrarMeuModalProprio = false;
          this.funcionCloseModal();
        }, 1000);
      }else if(res.status === 400){
        this.codeSendForEmailConfirmedLogin = false;
        this.invalidUsernamePasswordOrCode.value = true;

        this.dataService.setData(null);
        this.userLogin = null;
      }
    }
  }

  onClickConfirmSendTokenEmail(){
    this.subscriptions.push(this.UserService.sendTokenForEmail(this.inputValueEmailOrCpf).subscribe({
      next: (data: any) => {
        // se der certo tem que mostrar para o usuario que foi enviado com sucesso
        this.tokenEmailSendToEmail = true;
      },
      error: (error: any) => {
        if(error.status === 400){
          console.log(error);
        }

        // if(error.status === 403){
        // }
      }
    }));
  }

  onClickContinueSendToEmail(){
    this.AccountExist = false;
    this.alreadyClickedContinue = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.valueForEmailChooseForUser = "";
    this.EyeCutSvgOrEyeOpen = true;
    // this.mostrarMeuModalProprio = false;
    this.funcionCloseModal();
    this.tokenEmailSendToEmail = false;
    this.clickTroubleLoggingIn = false;
  }

  onClickContainerSvgArrowTroubleLogging(){
    this.clickTroubleLoggingIn = false;
    this.AccountExist = true;
    this.alreadyClickedContinue = true;
    this.showInsertCpfOrEmail = false;
    this.showInputEmailUser = true;
  }

  onClickTroubleLoggingIn(){
    this.clickTroubleLoggingIn = true;
    this.alreadyClickedContinue = false;
    this.AccountExist = false;
    this.showInputEmailUser = false;

    setTimeout(() => {
      this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
      let containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
      this.spanCpfOrEmail = containerSpanAndInput?.firstChild as HTMLElement;

      let modalContent = document.querySelector(".modal-content") as HTMLElement;
      modalContent.style.paddingBottom = "50px";
    }, 50);
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
    clearTimeout(this.settimeOutAnyLogin);
    clearTimeout(this.settimeOutAnyColor);
    clearTimeout(this.settimeOutLoadingCicle);
    clearTimeout(this.settimeOutButtonContinue);
    clearTimeout(this.settimeOutInputNotHaveValue);

    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
