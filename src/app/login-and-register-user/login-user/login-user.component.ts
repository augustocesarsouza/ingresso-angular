import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUserService } from '../login-user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent implements OnInit {

  containerMainSvgInput!: HTMLElement;
  containerSpanAndInput!: HTMLElement;
  spanCpfOrEmail!: HTMLElement;

  containerMainSvgPassword!: HTMLElement;
  containerPasswordInput!: HTMLElement;
  spanPassword!: HTMLElement;

  constructor(private router: Router, private loginUserService: LoginUserService, private dataService: DataService){
  }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
      this.containerSpanAndInput = document.querySelector('.container-span-cpf-email-input') as HTMLElement;
      this.spanCpfOrEmail = this.containerSpanAndInput?.firstChild as HTMLElement;

      this.containerMainSvgPassword = document.querySelector('.container-svg-password') as HTMLElement;
      this.containerPasswordInput = document.querySelector('.container-password-input') as HTMLElement;
      this.spanPassword = this.containerPasswordInput?.firstChild as HTMLElement;
    }
  }

  onClickInputCpfOrEmail(){
    if(this.spanCpfOrEmail){
      let inputCpfOrEmail = this.containerSpanAndInput.lastChild as HTMLElement;

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

  onClickRedirectHome(){
    this.router.navigate(['/home']);
  }

  onClickLogin(inputCpfOrEmail: HTMLInputElement, inputPassword: HTMLInputElement){
    let valueCpfOrEmail = inputCpfOrEmail.value;
    let valuePassword = inputPassword.value;

    this.loginUserService.loginUser(valueCpfOrEmail, valuePassword)
    .subscribe({
      next: (success: any) => {
        this.dataService.setData(success.data);
        this.router.navigate(['/home']);
      },
      error: error => {
        console.error("error get login");
      }
    });
  }
}
