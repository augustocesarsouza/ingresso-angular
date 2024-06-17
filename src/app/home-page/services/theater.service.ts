import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private _http: HttpClient) { }

  getAllTheaterForDisplayHomepage(){
    let response = this._http.get(`/api/v1/public/theatre/get-all-theater-for-display-homepage`).pipe(take(1));

    return response;
  }
}
