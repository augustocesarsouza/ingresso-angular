import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../home-page/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { movieChooseMovieTheater } from '../../interface-movie-and-theater/movie-interface/movie-choose-movie-theater';

@Component({
  selector: 'app-movie-choose-movie-theater',
  templateUrl: './movie-choose-movie-theater.component.html',
  styleUrl: './movie-choose-movie-theater.component.scss'
})
export class MovieChooseMovieTheaterComponent implements OnInit {
  movieChooseMovieTheater!: movieChooseMovieTheater;

  constructor(private route: ActivatedRoute, private movieService: MovieService){
  }

  ngOnInit(): void {
    // this.movieService.currentMovie.subscribe((data) => {
    //   // console.log(data);
    // });

    this.route.params.subscribe((movieData: any) => {
      let movieId = movieData.movieId;
      this.movieService.getInfoForChooseMovieTheater(movieId).subscribe((data: any) => {
        this.movieChooseMovieTheater = data.data;
      });
    });

  }
}
