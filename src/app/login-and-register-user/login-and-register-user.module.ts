import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterUserRoutingModule } from './login-and-register-user-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterIngressoComponent } from './footer-ingresso/footer-ingresso.component';

@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    FooterIngressoComponent
  ],
  imports: [
    CommonModule,
    LoginAndRegisterUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginAndRegisterUserModule { }
