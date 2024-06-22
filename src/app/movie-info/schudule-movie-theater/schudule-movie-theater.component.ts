import { Component, Input } from '@angular/core';
import { ObjHoursCinemaMovie } from '../movie-choose-movie-theater/movie-choose-movie-theater.component';

@Component({
  selector: 'app-schudule-movie-theater',
  templateUrl: './schudule-movie-theater.component.html',
  styleUrl: './schudule-movie-theater.component.scss'
})
export class SchuduleMovieTheaterComponent {
  @Input() itemSchedule!: ObjHoursCinemaMovie;
  @Input() type!: string;
  @Input() typeView!: string;

  constructor(){
  }

  replaceStringHours(hour: string){
    return hour.replace(/[^0-9:]/g, '');
  }
}
