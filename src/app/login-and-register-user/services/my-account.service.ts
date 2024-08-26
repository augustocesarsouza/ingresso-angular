import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetInfoAboutFinalInfoUserId } from '../options-user-all/interface-for-service/my-account-interface/get-info-about-final-info-user-id';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(private _http: HttpClient) { }

  getFinalPaymentCheckoutGetInfoAboutBayFinalInfoUserId(userId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-auth-token' // Se necessário
    });

    const options = {
      headers: headers,
    };

    let response = this._http.get(`/api/v1/public/final-payment-checkout/get-info-about-bay-final-info-user-id/${userId}`).pipe(take(1));
    return response;
  }

  getFinalPaymentCheckoutGetInfoAboutBayFinal(userId: string) {
    let response = this._http.get(`/api/v1/public/final-payment-checkout/get-info-about-bay-final/${userId}`).pipe(take(1));
    return response;
  }
}
