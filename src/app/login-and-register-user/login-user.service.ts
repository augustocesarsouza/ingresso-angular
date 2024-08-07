import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { environment } from '../../environments/environment';
import { Data } from './login-user/login-user.component';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private readonly API = `${environment.API}`;
  inscricao: Subscription = new Subscription();

  constructor(private http: HttpClient) { }

  loginUser(emailOrCpf: string, password: string){
    return this.http.get(`/api/v1/public/user/login/${emailOrCpf}/${password}`).pipe(take(1));
  }

  createAccountUserCheckout(objCreate: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this.http.post(`/api/v1/public/user/create-account-to-checkout`, objCreate, options).pipe(take(1));
  }

  verifyConfirmedUserEmail(valueInput: string, idUser: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this.http.get(`/api/v1/public/user/verify-confirmed-user-email/${valueInput}/${idUser}`).pipe(take(1));
  }

  verifyCodeLoginUser(valueInput: string, idUser: string){
    return this.http.get(`/api/v1/public/user/verific/${valueInput}/${idUser}`).pipe(take(1));
  }

  resendCodeEmailCheckout(userId: string){
    return this.http.get(`/api/v1/public/user/resend-code-verify-email-checkout/${userId}`).pipe(take(1));
  }

  resendCodeEmail(userLogin: Data){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    return this.http.post(`/api/v1/public/user/resend-code`, userLogin, options).pipe(take(1));
  }
}
