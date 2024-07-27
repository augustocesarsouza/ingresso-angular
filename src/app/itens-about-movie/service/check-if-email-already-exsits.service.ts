import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckIfEmailAlreadyExsitsService {

  constructor(private _http: HttpClient) { }

  checkIfEmailAlreadyExists (cpfOrEmail: string){
    let response = this._http.get(`/api/v1/public/user/check-email-already-exists/${cpfOrEmail}`).pipe(take(1));

    return response;
  }
}
