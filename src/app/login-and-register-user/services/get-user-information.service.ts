import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getuid } from 'process';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserInformationService {

  constructor(private _http: HttpClient) { }

  getInfoUser (){
    let userLogin = localStorage.getItem("userLogin");
    let token = "";
    let id = "";

    if(userLogin){
      let userLoginObj: any = JSON.parse(userLogin);
      token = userLoginObj.token;
      id = userLoginObj.id;
    }

    const headers = new HttpHeaders({
      'uid': id,
      'Authorization': token
    });

    const options = {
      headers: headers,
    };

    let response = this._http.get(`/api/v1/info-user/${id}`, options).pipe(take(1));

    return response;
  }
}
