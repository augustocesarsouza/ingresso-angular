import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ObjProductClicked } from '../bomboniere/bomboniere.component';

@Injectable({
  providedIn: 'root'
})
export class BomboniereService {
  private listOfTheProductClicked = new BehaviorSubject<ObjProductClicked[]>([]);
  numberOfTheProductClicked$ = this.listOfTheProductClicked.asObservable();

  constructor(private _http: HttpClient) { }

  getMovieIdInfo(movieId: string){
    let response = this._http.get(`/api/v1/public/additionalfoodmovie/getallfood/${movieId}`).pipe(take(1));
    // o get lá está certo ele fala que está vindo mais coisa "BUT IS NOT"
    return response;
  }

  updateNumberOfTheClickProduct(objProductClicked: ObjProductClicked[]) {
    this.listOfTheProductClicked.next(objProductClicked);
  }

  get currentProducts(): ObjProductClicked[] {
    return this.listOfTheProductClicked.getValue();
  }
}
