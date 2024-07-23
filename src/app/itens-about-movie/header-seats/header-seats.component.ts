import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-seats',
  templateUrl: './header-seats.component.html',
  styleUrl: './header-seats.component.scss'
})
export class HeaderSeatsComponent implements OnInit {
  wasClickedSvgUser = true;
  inputValueEmailOrCpf = "";
  errorInputEmailOrCpfNotHaveValueRight = false;

  spanCpfOrEmail!: HTMLElement;
  containerMainSvgInput!: HTMLElement;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    if(typeof document === 'undefined') return;

    this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
    let containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
    this.spanCpfOrEmail = containerSpanAndInput?.firstChild as HTMLElement;

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

  onClickInputCpfOrEmail(){
    if(this.spanCpfOrEmail){
      this.spanCpfOrEmail.style.display = 'block';
      this.containerMainSvgInput.style.padding = '2px 5px';

      if(this.containerMainSvgInput.style.borderColor !== "rgb(233, 74, 38)"){
        console.log("aqui");
        this.containerMainSvgInput.style.borderColor = '#2196F3';
      }
    }
  }

  onBlurInputCpfOrEmail(){
    if(this.spanCpfOrEmail){
      this.spanCpfOrEmail.style.display = 'none';
      this.containerMainSvgInput.style.padding = '6px 5px';

      if(this.containerMainSvgInput.style.borderColor !== "rgb(233, 74, 38)"){
        this.containerMainSvgInput.style.borderColor = 'rgb(217 217 217)';
      }
    }
  }

  onInputCpfEmail(event: Event) {
    let input = event.target as HTMLInputElement;
    this.inputValueEmailOrCpf = input.value;

    if(input.value.includes("@") && input.value.includes(".com")){
      this.containerMainSvgInput.style.borderColor = "rgb(0, 204, 0)";
      this.errorInputEmailOrCpfNotHaveValueRight = false;
    }else {
      this.containerMainSvgInput.style.borderColor = "rgb(217, 217, 217)";
    }
  }

  onClickContinue(){
    if(typeof document === 'undefined') return;

    if(!this.inputValueEmailOrCpf.includes("@") || !this.inputValueEmailOrCpf.includes(".com")){
      this.containerMainSvgInput.style.borderColor = "rgb(233, 74, 38)";
      this.errorInputEmailOrCpfNotHaveValueRight = true;
    }

  }
}
