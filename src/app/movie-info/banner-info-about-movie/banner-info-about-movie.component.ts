import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';

@Component({
  selector: 'app-banner-info-about-movie',
  templateUrl: './banner-info-about-movie.component.html',
  styleUrl: './banner-info-about-movie.component.scss'
})
export class BannerInfoAboutMovieComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() movieChooseMovieTheater!: movieChooseMovieTheater;

  constructor(){
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  descriptionMovieAbout(description: string): string {
    return description.substring(0, 105) + "...";
  }

  ngOnDestroy(): void {
  }
}
