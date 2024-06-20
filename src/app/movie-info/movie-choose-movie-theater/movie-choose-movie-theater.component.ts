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
    if(typeof document !== "undefined"){
      document.body.style.backgroundColor = "rgb(4, 18, 24)";

      let spanSessions = document.querySelector(".span-sessions") as HTMLSpanElement;
      let spanAboutTheMovie = document.querySelector(".span-about-the-movie") as HTMLSpanElement;


      spanSessions?.addEventListener("click", () => {
        spanSessions.style.borderBottom = "4px solid rgb(50, 85, 226)";
        spanSessions.style.fontWeight = '600';
        spanAboutTheMovie.style.border = "none";
        spanAboutTheMovie.style.fontWeight = '100';
      });

      spanAboutTheMovie?.addEventListener("click", () => {
        spanSessions.style.border = "none";
        spanSessions.style.fontWeight = '100';
        spanAboutTheMovie.style.borderBottom = "4px solid rgb(50, 85, 226)";
        spanAboutTheMovie.style.fontWeight = '600';

      });
    }
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

  descriptionMovieAbout(description: string): string {
    return description.substring(0, 105) + "...";
  }
}
