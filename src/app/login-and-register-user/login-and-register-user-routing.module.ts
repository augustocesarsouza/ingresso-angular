import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MyOrdersComponent } from './options-user-all/my-orders/my-orders.component';

const routes: Routes = [
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'confirmation-of-email', component: LoginUserComponent },
  { path: 'my-orders', component: MyOrdersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAndRegisterUserRoutingModule { }
