import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  sendTokenForEmail(emailOrCpf: string){
    return this.http.get(`/api/v1/public/user/send-token-email-change-password/${emailOrCpf}`).pipe(take(1));
  }

  changePasswordUser(user: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    console.log(user);


    return this.http.put(`/api/v1/public/user/update-user-password`, user, options).pipe(take(1));
  }
}
