import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CinemaMovieGetAll } from '../../interface-models/cinema-movie-interface/cinema-movie-get-all';
import { ObjectForOrderSummary, ObjHoursCinemaMovie } from '../movie-choose-movie-theater/movie-choose-movie-theater.component';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-info-location-and-schedule-hour',
  templateUrl: './movie-info-location-and-schedule-hour.component.html',
  styleUrl: './movie-info-location-and-schedule-hour.component.scss'
})
export class MovieInfoLocationAndScheduleHourComponent implements OnInit, AfterViewInit {
  @Input() cinemaMovieAll!: CinemaMovieGetAll[];
  @Input() objSchedule!: {key: string; value: ObjHoursCinemaMovie[];}[];
  @Input() movieChooseMovieTheater!: movieChooseMovieTheater;
  @Input() room!: number;
  @Input() movieId!: string;
  @Input() onClickSeats!: (item: CinemaMovieGetAll) => void;
  @ViewChild('containerScheduleDublado') containerScheduleDublado!: ElementRef<HTMLDivElement>;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.onClickChooseSeatsForThisHour = this.onClickChooseSeatsForThisHour.bind(this);
  }

  ngAfterViewInit(): void {
  }

  onClickChooseSeatsForThisHour(movieChooseMovieTheater: movieChooseMovieTheater, item: CinemaMovieGetAll, itemHour: string, containerScheduleDublado: ElementRef<HTMLDivElement> | null): void{
    if(typeof document !== 'undefined'){
      const diasDaSemana = [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sábado'
      ];

      let containerDate = document.querySelector(".container-date-1") as HTMLElement;

      if(containerDate === null || containerDate === undefined || !containerDate){
        containerDate = document.querySelector(".container-date-1") as HTMLElement;
      }

      let spanDayMonth = containerDate?.firstChild?.textContent;
      let indiceDia = new Date().getDay();

      const nomeDia = diasDaSemana[indiceDia];
      let nameDaySplit = nomeDia.slice(0, 3).toUpperCase();

      itemHour = itemHour.trim();
      spanDayMonth = spanDayMonth?.trim();
      nameDaySplit = nameDaySplit.trim();

      let dayMonthAndDayWeek = `${nameDaySplit} ${spanDayMonth} ${itemHour.slice(0, 5)}`;
      let typeMovieTheater = "";

      if(dayMonthAndDayWeek === null || dayMonthAndDayWeek === undefined){
        containerDate = document.querySelector(".container-date-1") as HTMLElement;
        let spanDayMonth = containerDate?.firstChild?.textContent;
        let indiceDia = new Date().getDay();

        const nomeDia = diasDaSemana[indiceDia];
        let nameDaySplit = nomeDia.slice(0, 3).toUpperCase();

        itemHour = itemHour.trim();
        spanDayMonth = spanDayMonth?.trim();
        nameDaySplit = nameDaySplit.trim();

        dayMonthAndDayWeek = `${nameDaySplit} ${spanDayMonth} ${itemHour.slice(0, 5)}`;
      }

      if(containerScheduleDublado){
        let containerSpanTypeMoreThanOne = containerScheduleDublado.nativeElement.querySelector(".container-span-type-view");
        let spans = containerSpanTypeMoreThanOne?.childNodes;
        if(spans && spans[0] && spans[0].textContent){
          typeMovieTheater = spans[0].textContent;
        }
      }else {
        let containerSpanTypeMoreThanOne = this.containerScheduleDublado.nativeElement.querySelector(".container-span-type-more-than-one");
        let spans = containerSpanTypeMoreThanOne?.childNodes;

        spans?.forEach((span: ChildNode, index: number) => {
          typeMovieTheater += span.textContent;

          if(spans.length > index + 1){
            typeMovieTheater += ",";
          }
        });
      }

      let containerRegion = document.querySelector(".container-region");
      let spanRegion = containerRegion?.lastChild?.textContent;

      if(spanRegion){
        this.room += 1;
        let objectForOrderSummary: ObjectForOrderSummary = {
          movieId: this.movieId,
          title: movieChooseMovieTheater.title,
          movieRating: movieChooseMovieTheater.movieRating,
          dayMonthAndDayWeek: dayMonthAndDayWeek,
          typeMovieTheater: typeMovieTheater,
          locationMovieTheater: item.cinemaDTO.nameCinema,
          spanRegion: spanRegion,
          imgMovie: movieChooseMovieTheater.imgUrl,
          room: this.room
        };

        this.router.navigate(['/itens-about-movie'], { state: { objectForOrderSummary } });
      }
    }
  }

  replaceStringHours(hour: string){
    return hour.replace(/[^0-9:]/g, '');
  }
}
