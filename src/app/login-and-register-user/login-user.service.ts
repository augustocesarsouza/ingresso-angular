import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { environment } from '../../environments/environment';

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
}
