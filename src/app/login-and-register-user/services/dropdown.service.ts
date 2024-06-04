import { Injectable } from '@angular/core';
import { Estados } from '../models/estados-br.model';
import { HttpClient } from '@angular/common/http';
import { Cidade } from '../models/cidade';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private _http: HttpClient) { }

  getEstadosBr (){
    let response = this._http.get<Estados[]>('assets/dados/estadosbr.json');

    return response;
  }

  getCidades (idEstado: number){
    let response = this._http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter((el) => el.estado == idEstado))
    );

    return response;
  }
}
