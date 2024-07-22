import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CpfService {

  constructor(private http: HttpClient) { }

  verificarCpf(cpf: string) {
    return this.http.get(`https://apigateway.conectagov.estaleiro.serpro.gov.br/api-cpf-light/v2/consulta/${cpf}`);
  }

  verificarCnpj(cnpj: string) {
    return this.http.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
    //03315918000975
  }
}
