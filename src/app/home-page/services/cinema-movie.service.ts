import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaMovieService {

  constructor(private _http: HttpClient) { }

  getMoviesAllTrending(movieId: string, region: string){
    // let region = "Campo Grande";
    let response = this._http.get(`/api/v1/public/cinemaMovie/getAll/${region}/${movieId}`).pipe(take(1));
    // o get lá está certo ele fala que está vindo mais coisa "BUT IS NOT"
    return response;
  }
}
