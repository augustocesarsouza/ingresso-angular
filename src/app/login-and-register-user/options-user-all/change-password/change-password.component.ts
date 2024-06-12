import { Component, Input, OnInit } from '@angular/core';

declare global {
  interface Window {
    recaptchaCallback: () => void;
  }
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit {
  @Input() changePassword: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
  }

  onClickCloseModal(){
    this.changePassword = false;
  }

  onCaptchaResolved(captchaResponse: string | null) {
    console.log("true");
  }
}
