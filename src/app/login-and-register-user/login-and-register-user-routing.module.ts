import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MyOrdersComponent } from './options-user-all/my-orders/my-orders.component';
import { MyOrdersCinemaComponent } from './options-user-all/my-orders-cinema/my-orders-cinema.component';
import { PersonalDataComponent } from './options-user-all/personal-data/personal-data.component';
import { PaymentMethodsComponent } from './options-user-all/payment-methods/payment-methods.component';
import { PasswordChangeComponent } from './password-change/password-change.component';

const routes: Routes = [
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'password-change/:token', component: PasswordChangeComponent },
  { path: 'confirmation-of-email', component: LoginUserComponent },
  { path: '', component: MyOrdersComponent,
    children: [
      { path: 'my-orders', component: MyOrdersCinemaComponent },
      { path: 'personal-data', component: PersonalDataComponent },
      { path: 'payment-methods', component: PaymentMethodsComponent },
      { path: '', redirectTo: 'my-orders', pathMatch: 'full' },
      { path: '**', redirectTo: 'my-orders' }
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAndRegisterUserRoutingModule { }
