import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserInformationService {

  constructor(private _http: HttpClient) { }

  getInfoUser (){
    console.log("aqui");

    let userLogin = null;

    if(typeof window !== "undefined"){
      userLogin = localStorage.getItem("userLogin");
    }

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

  updateInfoAdditionalInfoUser(additionalInfoUserToUpdate: any, senha: string){
    let userLogin = null;

    if(typeof window !== "undefined"){
      userLogin = localStorage.getItem("userLogin");
    }

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
      "Content-Type": "application/json",
      headers: headers,
    };

    let response = this._http.post(`/api/v1/additional/update-info-user/${senha}`, additionalInfoUserToUpdate, options).pipe(take(1));

    return response;
  }

  updateNameUser(userUpdate: any, senha: string){
    let userLogin = null;

    if(typeof window !== "undefined"){
      userLogin = localStorage.getItem("userLogin");
    }

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
      "Content-Type": "application/json",
      headers: headers,
    };

    let response = this._http.put(`/api/v1/user/update-user/${senha}`, userUpdate, options).pipe(take(1));

    return response;
  }
}

