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
