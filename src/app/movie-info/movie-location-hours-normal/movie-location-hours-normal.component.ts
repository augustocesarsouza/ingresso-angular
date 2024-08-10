import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ObjectForOrderSummary, ObjHoursCinemaMovie } from '../movie-choose-movie-theater/movie-choose-movie-theater.component';
import { CinemaMovieGetAll } from '../../interface-models/cinema-movie-interface/cinema-movie-get-all';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';
import { Router } from '@angular/router';

// CONTINUAR A SEPARAR ESSE COMPONENT AMANHA DA PRA SEPARAR ELE
// ele é Igual o "MovieLocationHoursFilteredComponent"

@Component({
  selector: 'app-movie-location-hours-normal',
  templateUrl: './movie-location-hours-normal.component.html',
  styleUrl: './movie-location-hours-normal.component.scss'
})
export class MovieLocationHoursNormalComponent implements OnInit {
  @Input() objHoursToCinemaMovieScheduleFiltered!: {key: string;value: ObjHoursCinemaMovie[];}[];
  @Input() mostrarCinemaMovieGetAllFiltered!: boolean;
  @Input() cinemaMovieGetAll!: CinemaMovieGetAll[];
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
