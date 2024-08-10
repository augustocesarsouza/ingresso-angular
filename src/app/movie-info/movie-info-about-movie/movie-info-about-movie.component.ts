import { Component, Input, OnInit } from '@angular/core';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';

@Component({
  selector: 'app-movie-info-about-movie',
  templateUrl: './movie-info-about-movie.component.html',
  styleUrl: './movie-info-about-movie.component.scss'
})
export class MovieInfoAboutMovieComponent implements OnInit {
  @Input() isClickedSpanAbountTheMovie!: boolean;
  @Input() movieChooseMovieTheater!: movieChooseMovieTheater;
  @Input() onSeeSessions!: () => void;

  constructor(){
  }

  ngOnInit(): void {
    // this.onClickChooseSeatsForThisHour = this.onClickChooseSeatsForThisHour.bind(this);
  }
}
