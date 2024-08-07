import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Data } from '../../login-and-register-user/login-user/login-user.component';
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

  wasClickedSvgUser = false;

  userLogin!: Data | null;
  mostrarMeuModalProprio = false;
  codeConfirmedForTheUser = false;

  constructor(private router: Router, private dataService: DataService){
  }

  ngOnInit(): void {
    if(typeof document === 'undefined') return;
    this.funcionCloseModal = this.funcionCloseModal.bind(this);
    this.funcionaCodeConfirmedForTheUser = this.funcionaCodeConfirmedForTheUser.bind(this);

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
        this.codeConfirmedForTheUser = true;
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
            top: 36px;
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

  funcionCloseModal(){
    this.mostrarMeuModalProprio = false;
  }

  funcionaCodeConfirmedForTheUser = (value: boolean) => {
    this.codeConfirmedForTheUser = value;
  }

  onClickLogginOrRegister(){
    // if(typeof document === 'undefined') return;

    // setTimeout(() => {
    //   let modalFooter = document.querySelector(".modal-footer") as HTMLElement;

    //   if(modalFooter){
    //     this.buttonContinue = modalFooter.lastChild as HTMLElement;
    //   }

    //   this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
    //   let containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
    //   this.spanCpfOrEmail = containerSpanAndInput?.firstChild as HTMLElement;

    //   this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
    //   this.containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
    //   this.spanPassword = this.containerPasswordInput?.firstChild as HTMLElement;

    //   // this.inputPassword = document.querySelector('.input-password') as HTMLInputElement;
    //   // console.log(this.inputPassword);
    // }, 50);

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

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
