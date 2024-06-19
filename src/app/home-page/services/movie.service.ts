import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { MovieTrending } from '../../interface-movie-and-theater/movie-interface/movie-trending';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieSource = new BehaviorSubject<MovieTrending | null>(null);
  currentMovie = this.movieSource.asObservable();

  constructor(private _http: HttpClient) { }

  getMovieHighlight(){
    // let userLogin = null;

    // if(typeof window !== "undefined"){
    //   userLogin = localStorage.getItem("userLogin");
    // }

    // let token = "";
    // let id = "";

    // if(userLogin){
    //   let userLoginObj: any = JSON.parse(userLogin);
    //   token = userLoginObj.token;
    //   id = userLoginObj.id;
    // }

    // const headers = new HttpHeaders({
    //   'uid': id,
    //   'Authorization': token
    // });

    // const options = {
    //   headers: headers,
    // };

    let response = this._http.get(`/api/v1/public/movie/get-status-highlight`).pipe(take(1));

    return response;
  }

  getMoviesAllTrending(){
    let response = this._http.get(`/api/v1/public/movie/get-all-status-trending`).pipe(take(1));

    return response;
  }

  getInfoForChooseMovieTheater(movieId: string){
    let response = this._http.get(`/api/v1/public/movie/get-info-for-choose-movie-theater/${movieId}`).pipe(take(1));

    return response;
  }

  changeMovie(movie: MovieTrending){
    this.movieSource.next(movie);
  }
}
