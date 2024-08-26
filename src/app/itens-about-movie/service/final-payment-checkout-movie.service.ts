import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { objBodyCreate } from '../back-or-progress-footer/back-or-progress-footer.component';

@Injectable({
  providedIn: 'root'
})
export class FinalPaymentCheckoutMovieService {
  constructor(private _http: HttpClient) { }

  createFinalPaymentCheckoutMovie(objCreate: objBodyCreate){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    let response = this._http.post(`/api/v1/public/final-payment-checkout-movie/create`, objCreate, options).pipe(take(1));
    return response;
  }
}
