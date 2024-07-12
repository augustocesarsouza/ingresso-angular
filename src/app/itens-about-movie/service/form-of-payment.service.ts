import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormOfPaymentService {

  constructor(private _http: HttpClient) { }

  getMovieIdInfo(movieId: string){
    let response = this._http.get(`/api/v1/public/form-of-payment/get-form/${movieId}`).pipe(take(1));
    // o get lá está certo ele fala que está vindo mais coisa "BUT IS NOT"
    return response;
  }
}
