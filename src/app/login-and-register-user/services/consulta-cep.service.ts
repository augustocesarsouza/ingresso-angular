import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor() { }

  async consultaCEP (cep: string) {
    if(cep === null || cep === undefined) return;

    cep = cep.replace(/\D/g, '');

    if(cep !== ""){
      let validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {

        let res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        let json: any = await res.json();

        return json;
      }else {
        return undefined;
      }
    }
  }
}
