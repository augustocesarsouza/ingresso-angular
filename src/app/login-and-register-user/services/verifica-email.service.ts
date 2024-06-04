import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private _http: HttpClient) { }

  verficiarEmail(email: string){
    return this._http.get('assets/dados/verficiarEmail.json')
    .pipe(
      delay(2000),
      map((dados: any) => dados.emails),
      // map((dados: { email: string }[]) => dados.filter(v => v.email === email)),
      map((dados: { email: string }[]) => dados.some(v => v.email === email))
      // tap(console.log)
    );
  }
}
