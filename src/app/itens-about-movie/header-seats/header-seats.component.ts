import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-seats',
  templateUrl: './header-seats.component.html',
  styleUrl: './header-seats.component.scss'
})
export class HeaderSeatsComponent implements OnInit, OnDestroy {
  wasClickedSvgUser = true;
  inputValueEmailOrCpf = "";
  inputValuePassword = "";
  errorInputEmailOrCpfNotHaveValueRight = false;

  AccountExist = false;
  showInsertCpfOrEmail = true;
  showInputEmailUser = false;
  valueForEmailChooseForUser = "";

  containerMainSvgInput!: HTMLElement;
  spanCpfOrEmail!: HTMLElement;

  containerMainSvgPassword!: HTMLElement;
  containerPasswordInput!: HTMLElement;
  spanPassword!: HTMLElement;

  settimeOutAny: any;
  settimeOutAnyLogin: any;

  colorBorderGreen = "rgb(0, 204, 0)";
  colorBorderBlue = "#2196F3";
  colorBorderRed = "rgb(233, 74, 38)";
  colorBorderGrey = "rgb(217, 217, 217)";

  constructor(private router: Router){
  }

  ngOnInit(): void {
    if(typeof document === 'undefined') return;

    this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
    let containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
    this.spanCpfOrEmail = containerSpanAndInput?.firstChild as HTMLElement;

    this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
    this.containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
    this.spanPassword = this.containerPasswordInput?.firstChild as HTMLElement;

    if(this.wasClickedSvgUser){
      let containerSvgUserBody = document.querySelector(".container-svg-user-body");

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
          }
        `;
        document.head.appendChild(beforeStyle);

        // Adicionando estilos ::after
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
          }
        `;
        document.head.appendChild(afterStyle);
      }
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

  onClickCloseEnterUser(){
    this.AccountExist = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.errorInputEmailOrCpfNotHaveValueRight= false;

    this.updateProperties();

    this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
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

    if(input.value.includes("@") && input.value.includes(".com")){
      this.containerMainSvgInput.style.borderColor = this.colorBorderGreen;
      this.errorInputEmailOrCpfNotHaveValueRight = false;
    }else {
      if(this.containerMainSvgInput.style.borderColor !== this.colorBorderGreen && this.containerMainSvgInput.style.borderColor !== this.colorBorderRed){
        this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
      }
    }
  }

  onClickContinue(){
    if(typeof document === 'undefined') return;

    if(!this.inputValueEmailOrCpf.includes("@") || !this.inputValueEmailOrCpf.includes(".com")){
      this.containerMainSvgInput.style.borderColor = this.colorBorderRed;
      this.errorInputEmailOrCpfNotHaveValueRight = true;
    }

    if(this.inputValueEmailOrCpf.includes("@") && this.inputValueEmailOrCpf.includes(".com")){
      this.AccountExist = true;
      // É AQUI QUE EU VOU VERIFICAR SE A CONTA EXISTE ATRAVER DE UM "SERVICE"
      this.showInsertCpfOrEmail = false;
      this.showInputEmailUser = true;

      this.updatePropertiesLogin();

      let inputCpfEmail = document.querySelector(".input-cpf-email") as HTMLInputElement;
      this.valueForEmailChooseForUser = inputCpfEmail.value;
    }
  }

  onClickChangeEmail(){
    this.AccountExist = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.valueForEmailChooseForUser = this.inputValueEmailOrCpf;

    this.updateProperties();

    this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
    this.errorInputEmailOrCpfNotHaveValueRight= false;
  }

  onClickCreateNewAccount(){

  }

  onClickContainerSvgArrowPayment(){
    if(typeof document === 'undefined') return;

    this.AccountExist = false;
    this.showInsertCpfOrEmail = true;
    this.showInputEmailUser = false;

    this.valueForEmailChooseForUser = this.inputValueEmailOrCpf;

    this.updateProperties();

    this.containerMainSvgInput.style.borderColor = this.colorBorderGrey;
    this.errorInputEmailOrCpfNotHaveValueRight= false;
  }

  onCLickEnterAsClient(){

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

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
    clearTimeout(this.settimeOutAnyLogin);
  }
}
