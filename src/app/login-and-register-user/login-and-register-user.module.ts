import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterUserRoutingModule } from './login-and-register-user-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterIngressoComponent } from './footer-ingresso/footer-ingresso.component';
import { IngressoTopComponent } from './ingresso-top/ingresso-top.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { AllSvgAppModule } from '../all-svg-app/all-svg-app.module';
import { MyOrdersComponent } from './options-user-all/my-orders/my-orders.component';
import { AllOptionsUserComponent } from './options-user-all/all-options-user/all-options-user.component';
import { InputGenericComponent } from './options-user-all/input-generic/input-generic.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { ChangePasswordComponent } from './options-user-all/change-password/change-password.component';

@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    FooterIngressoComponent,
    IngressoTopComponent,
    InputFieldComponent,
    ErrorMsgComponent,
    CampoControlErroComponent,
    FormDebugComponent,
    MyOrdersComponent,
    AllOptionsUserComponent,
    ChangePasswordComponent,
    InputGenericComponent,
  ],
  imports: [
    CommonModule,
    LoginAndRegisterUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AllSvgAppModule,
    RecaptchaModule
  ]
})
export class LoginAndRegisterUserModule { }
