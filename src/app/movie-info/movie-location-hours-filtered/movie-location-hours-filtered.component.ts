import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CinemaMovieGetAll } from '../../interface-models/cinema-movie-interface/cinema-movie-get-all';
import { Router } from '@angular/router';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';
import { ObjectForOrderSummary, ObjHoursCinemaMovie } from '../movie-choose-movie-theater/movie-choose-movie-theater.component';

@Component({
  selector: 'app-movie-location-hours-filtered',
  templateUrl: './movie-location-hours-filtered.component.html',
  styleUrl: './movie-location-hours-filtered.component.scss'
})
export class MovieLocationHoursFilteredComponent implements OnInit {
  @Input() objHoursToCinemaMovieScheduleFiltered!: {key: string;value: ObjHoursCinemaMovie[];}[];
  @Input() mostrarCinemaMovieGetAllFiltered!: boolean;
  @Input() cinemaMovieGetAllFiltered!: CinemaMovieGetAll[];
  @Input() onClickSeats!: (item: CinemaMovieGetAll) => void;
  @Input() objHourss!: {key: string; value: ObjHoursCinemaMovie[];}[];
  @Input() movieChooseMovieTheater!: movieChooseMovieTheater;
  @Input() movieId!: string;
  @Input() room!: number;
  @ViewChild('containerScheduleDublado') containerScheduleDublado!: ElementRef<HTMLDivElement>;

  constructor(){
  }

  ngOnInit(): void {
  }
}
