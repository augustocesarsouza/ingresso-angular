import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { CheckIfEmailAlreadyExsitsService } from '../service/check-if-email-already-exsits.service';
import { Subscription } from 'rxjs';
import { LoginUserService } from '../../login-and-register-user/login-user.service';
import { Data, ErrorObj } from '../../login-and-register-user/login-user/login-user.component';
import { DataService } from '../../login-and-register-user/data.service';

interface CheckExistsEmail {
  userExists: boolean;
}

@Component({
  selector: 'app-header-seats',
  templateUrl: './header-seats.component.html',
  styleUrl: './header-seats.component.scss'
})
export class HeaderSeatsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  wasClickedSvgUser = true;
  inputValueEmailOrCpf = "";
  inputValuePassword = "";
  errorInputEmailOrCpfNotHaveValueRight = false;
  showLoadingCicle = false;

  AccountExist = false;
  alreadyClickedContinue = false;
  showInsertCpfOrEmail = true;
  showInputEmailUser = false;
  EyeCutSvgOrEyeOpen = true;
  valueForEmailChooseForUser = "";

  containerMainSvgInput!: HTMLElement;
  spanCpfOrEmail!: HTMLElement;

  containerMainSvgPassword!: HTMLElement;
  containerPasswordInput!: HTMLElement;
  spanPassword!: HTMLElement;
  inputPassword!: HTMLInputElement;
  buttonContinue!: HTMLElement;

  settimeOutAny: any;
  settimeOutAnyColor: any;
  settimeOutAnyLogin: any;
  settimeOutLoadingCicle: any;
  settimeOutButtonContinue: any;
  settimeOutInputNotHaveValue: any;
  settimeOutInputPassword: any;

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
  mostrarMeuModalProprio = false;
  codeConfirmedForTheUser = false;

  constructor(private router: Router, private loginUserService: LoginUserService, private dataService: DataService, private check_if_email_already_exsits_Service: CheckIfEmailAlreadyExsitsService){
  }

  ngOnInit(): void {
    if(typeof document === 'undefined') return;

    let userLocalStorage = null;

    if(typeof window !== "undefined"){
      userLocalStorage = localStorage.getItem('userLogin');
    }

    if(userLocalStorage === "null" || userLocalStorage === null){
      this.subscriptions.push(this.dataService.data$.subscribe((data: Data) => {
        const userJSON = JSON.stringify(data);

        if(typeof window !== "undefined"){
          localStorage.setItem('userLogin', userJSON);
        }

        this.userLogin = data;
      }));
    }else {
      if(userLocalStorage){
        let userJSON: Data = JSON.parse(userLocalStorage);
        this.userLogin = userJSON;
        this.codeConfirmedForTheUser = true;

      }
    }

    if(this.wasClickedSvgUser){
      let containerSvgUserBody = document.querySelector(".container-svg-user-body");

      if(containerSvgUserBody){
        const beforeStyle = document.createElement('style');
        beforeStyle.innerHTML = `
          .container-svg-user-body::before {
            content: "";
            position: absolute;
            top: 35px;
            right: 0;
            border-width: 12px;
            border-style: solid;
            border-color: transparent transparent rgb(152, 170, 236);
            border-image: initial;
          }
        `;
        document.head.appendChild(beforeStyle);

        // Adicionando estilos ::after
        const afterStyle = document.createElement('style');
        afterStyle.innerHTML = `
          .container-svg-user-body::after {
            content: "";
            position: absolute;
            top: 37px;
            right: -1px;
            border-width: 13px;
            border-style: solid;
            border-color: transparent transparent rgb(5, 31, 42);
            border-image: initial;
            z-index: 2;
          }
        `;
        document.head.appendChild(afterStyle);
      }
    }

    import('inputmask').then(Inputmask => {
      let inputCodeOne = document.getElementById('input-code-one');
      let inputCodeTwo = document.getElementById('input-code-two');
      let inputCodeThree = document.getElementById('input-code-three');
      let inputCodeFour = document.getElementById('input-code-four');
      let inputCodeFive = document.getElementById('input-code-five');
      let inputCodeSix = document.getElementById('input-code-six');

      if (inputCodeOne) {
        let mask = new Inputmask.default({
          mask: "9",
          placeholder: "·",
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCodeOne);
      }

      if (inputCodeTwo) {
        let mask = new Inputmask.default({
          mask: "9",
          placeholder: "·",
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCodeTwo);
      }

      if (inputCodeThree) {
        let mask = new Inputmask.default({
          mask: "9",
          placeholder: "·",
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCodeThree);
      }

      if (inputCodeFour) {
        let mask = new Inputmask.default({
          mask: "9",
          placeholder: "·",
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCodeFour);
      }

      if (inputCodeFive) {
        let mask = new Inputmask.default({
          mask: "9",
          placeholder: "·",
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCodeFive);
      }

      if (inputCodeSix) {
        let mask = new Inputmask.default({
          mask: "9",
          placeholder: "·",
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false
        });
        mask.mask(inputCodeSix);
      }

    });
  }

  blockArrowUser(){
    let containerSvgUserBody = document.querySelector(".container-svg-user-body") as HTMLElement;
    console.log(containerSvgUserBody);

    if(containerSvgUserBody){
      const beforeStyle = document.createElement('style');
      beforeStyle.innerHTML = `
        .container-svg-user-body::before {
          content: "";
          position: absolute;
          top: 34px;
          border-width: 12px;
          border-style: solid;
          border-color: transparent transparent rgb(152, 170, 236);
          border-image: initial;
          display: none;
        }
      `;
      document.head.appendChild(beforeStyle);

      const afterStyle = document.createElement('style');
      afterStyle.innerHTML = `
        .container-svg-user-body::after {
          content: "";
          position: absolute;
          top: 35px;
          right: -1px;
          border-width: 13px;
          border-style: solid;
          border-color: transparent transparent rgb(5, 31, 42);
          border-image: initial;
          z-index: 2;
          display: none;
        }
      `;
      document.head.appendChild(afterStyle);
    }
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

  onClickIngressoImg(){
    this.router.navigate(['/']);
  }

  onClickUser(){
    this.wasClickedSvgUser = !this.wasClickedSvgUser;

    if(this.wasClickedSvgUser){
      let containerSvgUserBody = document.querySelector(".container-svg-user-body") as HTMLElement;

      if(containerSvgUserBody){
        const beforeStyle = document.createElement('style');
        beforeStyle.innerHTML = `
          .container-svg-user-body::before {
            content: "";
            position: absolute;
            top: 34px;
            border-width: 12px;
            border-style: solid;
            border-color: transparent transparent rgb(152, 170, 236);
            border-image: initial;
            display: block;
          }
        `;
        document.head.appendChild(beforeStyle);

        const afterStyle = document.createElement('style');
        afterStyle.innerHTML = `
          .container-svg-user-body::after {
            content: "";
            position: absolute;
            top: 35px;
            right: -1px;
            border-width: 13px;
            border-style: solid;
            border-color: transparent transparent rgb(5, 31, 42);
            border-image: initial;
            z-index: 2;
            display: block;
          }
        `;
        document.head.appendChild(afterStyle);
      }
    }else {
      let containerSvgUserBody = document.querySelector(".container-svg-user-body") as HTMLElement;

      if(containerSvgUserBody){
        const beforeStyle = document.createElement('style');
        beforeStyle.innerHTML = `
          .container-svg-user-body::before {
            content: "";
            position: absolute;
            top: 34px;
            border-width: 12px;
            border-style: solid;
            border-color: transparent transparent rgb(152, 170, 236);
            border-image: initial;
            display: none;
          }
        `;
        document.head.appendChild(beforeStyle);

        const afterStyle = document.createElement('style');
        afterStyle.innerHTML = `
          .container-svg-user-body::after {
            content: "";
            position: absolute;
            top: 35px;
            right: -1px;
            border-width: 13px;
            border-style: solid;
            border-color: transparent transparent rgb(5, 31, 42);
            border-image: initial;
            z-index: 2;
            display: none;
          }
        `;
        document.head.appendChild(afterStyle);
      }
    }
  }

  onClickLogginOrRegister(){
    if(typeof document === 'undefined') return;

    setTimeout(() => {
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

      // this.inputPassword = document.querySelector('.input-password') as HTMLInputElement;
      // console.log(this.inputPassword);

    }, 50);

    this.mostrarMeuModalProprio = true;
  }

  onClickExit(){
    if(typeof window !== "undefined"){
      localStorage.removeItem('userLogin');
    }

    this.userLogin = null;
    this.dataService.setData(null);
    this.wasClickedSvgUser = false;
    this.blockArrowUser();
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

    this.mostrarMeuModalProprio = false;
    this.AccountExist = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.errorInputEmailOrCpfNotHaveValueRight= false;
    this.EyeCutSvgOrEyeOpen = true;

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

      this.containerMainSvgInput.style.padding = '2px 5px';

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

      this.subscriptions.push(this.check_if_email_already_exsits_Service.checkIfEmailAlreadyExists(this.inputValueEmailOrCpf).subscribe((data: any) => {
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

  onCLickEnterAsClient(){
    if(typeof document === "undefined") return;

    let inputPassword = document.querySelector(".input-password-send-code") as HTMLInputElement;

    let valueCpfOrEmail = this.valueForEmailChooseForUser;
    let valuePassword = inputPassword.value;

    this.loginUserService.loginUser(valueCpfOrEmail, valuePassword)
    .subscribe({
      next: (success: any) => {
        console.log(success);

        let user = success.data;

        if(user.codeSentSuccessfullyEmail){
          this.userLogin = user;

          this.dataService.setData(user);
          this.codeSendForEmailConfirmedLogin = true;
        }
      },
      error: error => {
        if(error.status === 401){
          this.invalidUsernamePasswordOrCode.value = true;
        }

        const errorObj: ErrorObj = error.error;

        if(errorObj.typeMessage === "email"){
          this.userLogin = errorObj.data;
          // this.confirmEmailRegister = true;
        }
      }
    });
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

  onInputPassword(event: Event) {
    let input = event.target as HTMLInputElement;
    this.inputValuePassword = input.value;

    if(input.value.length > 0){
      this.containerMainSvgPassword.style.borderColor = this.colorBorderGreen;
    }else {
      this.containerMainSvgPassword.style.borderColor = this.colorBorderGrey;
    }
  }

  onClickContainerSvgEyeCut(){
    this.EyeCutSvgOrEyeOpen = false;

    this.inputPassword.type = "text";
  }

  onClickContainerSvgEyeOpen(){
    this.EyeCutSvgOrEyeOpen = true;

    this.inputPassword.type = "password";
  }

  onClickSvgExitCodeEmail(){
    this.codeSendForEmailConfirmedLogin = !this.codeSendForEmailConfirmedLogin;
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
      // userLogin  - só pegar a variavel e trocar de "visitante" para nome e arrumar modal
      // e ver se o login vou colocado como variavel global todas as partes deve ter esse login this.dataService.setData(user);

      const res = await fetch(`/api/v1/public/user/verific/${valueInput}/${idUser}`);

      if(res.status === 200){
        this.codeSendForEmailConfirmedLogin = false;
        this.codeConfirmedForTheUser = true;
        setTimeout(() => {
          this.mostrarMeuModalProprio = false;
        }, 1000);
      }else if(res.status === 400){
        this.codeSendForEmailConfirmedLogin = false;
        this.invalidUsernamePasswordOrCode.value = true;
      }


    }
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
