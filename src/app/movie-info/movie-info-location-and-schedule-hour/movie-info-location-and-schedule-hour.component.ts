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
  @Input() movieId!: string;
  @Input() onClickSeats!: (item: CinemaMovieGetAll) => void;
  // @ViewChild('containerScheduleDublado') containerScheduleDublado!: ElementRef<HTMLDivElement>;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.onClickChooseSeatsForThisHour = this.onClickChooseSeatsForThisHour.bind(this);
  }

  ngAfterViewInit(): void {
  }

  onClickChooseSeatsForThisHour(movieChooseMovieTheater: movieChooseMovieTheater, item: CinemaMovieGetAll, itemHour: string, containerScheduleDublado: HTMLDivElement): void{
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
        let containerSpanTypeMoreThanOne = containerScheduleDublado.querySelector(".container-span-type-view");

        let spans = containerSpanTypeMoreThanOne?.childNodes;

        if(spans && spans.length <= 1){
          if(spans && spans[0] && spans[0].textContent){
            typeMovieTheater = spans[0].textContent;
          }
        }else {
          spans?.forEach((el: ChildNode, index: number) => {
            typeMovieTheater += el.textContent;

            if(index < spans.length - 1){
              typeMovieTheater += ",";
            }
          });
        }
      }else {
        // let containerSpanTypeMoreThanOne = this.containerScheduleDublado.nativeElement.querySelector(".container-span-type-more-than-one");
        // let spans = containerSpanTypeMoreThanOne?.childNodes;

        // spans?.forEach((span: ChildNode, index: number) => {
        //   typeMovieTheater += span.textContent;

        //   if(spans.length > index + 1){
        //     typeMovieTheater += ",";
        //   }
        // });
      }

      let containerRegion = document.querySelector(".container-region");
      let spanRegion = containerRegion?.lastChild?.textContent;

      if(spanRegion){
        let objectForOrderSummary: ObjectForOrderSummary = {
          movieId: this.movieId,
          title: movieChooseMovieTheater.title,
          movieRating: movieChooseMovieTheater.movieRating,
          dayMonthAndDayWeek: dayMonthAndDayWeek,
          typeMovieTheater: typeMovieTheater,
          locationMovieTheater: item.cinemaDTO.nameCinema,
          spanRegion: spanRegion,
          imgMovie: movieChooseMovieTheater.imgUrl,
          room: item.room,
          cinemaDTO: item.cinemaDTO
        };

        this.router.navigate(['/itens-about-movie'], { state: { objectForOrderSummary } });
      }
    }
  }

  replaceStringHours(hour: string){
    let hourAtt = hour.trim().slice(0, 5);

    return hourAtt.replace(/[^0-9:]/g, '');

    // return hour.replace(/[^0-9:]/g, '');
  }
}
