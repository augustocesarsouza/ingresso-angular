import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ObjHoursCinemaMovie } from '../movie-choose-movie-theater/movie-choose-movie-theater.component';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';
import { CinemaMovieGetAll } from '../../interface-models/cinema-movie-interface/cinema-movie-get-all';

@Component({
  selector: 'app-schudule-movie-theater',
  templateUrl: './schudule-movie-theater.component.html',
  styleUrl: './schudule-movie-theater.component.scss'
})
export class SchuduleMovieTheaterComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() itemSchedule!: ObjHoursCinemaMovie;
  @Input() type!: string;
  @Input() typeView!: string;
  @Input() movieChooseMovieTheater!: movieChooseMovieTheater;
  @Input() item!: CinemaMovieGetAll;
  @Input() onClickChooseSeatsForThisHour!: (movieChooseMovieTheater: movieChooseMovieTheater, item: CinemaMovieGetAll, itemHour: string, containerScheduleDublado: HTMLDivElement) => void;
  @ViewChild('containerScheduleDublado') containerScheduleDublado!: ElementRef<HTMLDivElement>;

  constructor(){
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
  // containerScheduleDublado: HTMLDivElement
  onClickHour(itemHour: string, containerScheduleDublado: HTMLDivElement){
    if (this.onClickChooseSeatsForThisHour) {
      this.onClickChooseSeatsForThisHour(this.movieChooseMovieTheater, this.item, itemHour, containerScheduleDublado);
    } else {
      console.error('onClickChooseSeatsForThisHour is not defined');
    }
  }

  replaceStringHours(hour: string){
    let hourAtt = hour.trim().slice(0, 5);

    return hourAtt.replace(/[^0-9:]/g, '');
  }

  ngOnDestroy(): void {
  }
}
