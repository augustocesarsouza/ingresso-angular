import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUserService } from '../login-user.service';
import { DataService } from '../data.service';
import { combineLatest } from 'rxjs';
import { jwtDecode } from "jwt-decode";

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
  currentPath: string | undefined;
  registrationConfirmed = true;

  constructor(private router: Router, private route: ActivatedRoute, private loginUserService: LoginUserService, private dataService: DataService){
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

    let result = combineLatest([
      this.route.queryParams,
      this.route.url
    ]).subscribe(([ params, urlSegments ]) => {
      let currentPath = urlSegments.map(segment => segment.path).join('/');

      if(currentPath === "confirmation-of-email"){
        let token = params['token'];

        this.verifyToken(token);
      }
    });
  }

  verifyToken(token: string){
    if(token !== null && token.length > 20){
      const tokenExp = jwtDecode(token).exp;
      
      if(tokenExp === undefined)
        return;

      // const currentTime = Date.now() / 1000;

      // const expirationDate = new Date(tokenExp * 1000).toISOString();
      // const expirationDateData = new Date(expirationDate);

      // const hourCurrentUtc = new Date(currentTime * 1000).toISOString();
      // const dateObject = new Date(hourCurrentUtc);

      this.confirmTokenUser(token);
      
      // if (expirationDateData > dateObject) {
      //   this.confirmTokenUser(token);
      // }
    }
  }

  confirmTokenUser = async (token: string) => {
    const res = await fetch(`/api/v1/public/user/confirm-token/${token}`);
    
    if (res.status === 200) {
      const json = await res.json();
      console.log(json);
      
      console.log("true");
      this.registrationConfirmed = true;
      
    }
  };

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

  onClickCreateNewAccount(){
    this.router.navigate(['/my-account/register']);
  }
}
