import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../home-page/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CinemaMovieService } from '../../home-page/services/cinema-movie.service';
import { CinemaMovieGetAll } from '../../interface-models/cinema-movie-interface/cinema-movie-get-all';

export interface next7DaysProps {
  dayYear: string;
  weekDay: string;
}

export interface ObjHoursCinemaMovie {
  type: string;
  arryHours: string[];
}

@Component({
  selector: 'app-movie-choose-movie-theater',
  templateUrl: './movie-choose-movie-theater.component.html',
  styleUrl: './movie-choose-movie-theater.component.scss'
})
export class MovieChooseMovieTheaterComponent implements OnInit {
  movieChooseMovieTheater!: movieChooseMovieTheater;
  cinemaMovieGetAll!: CinemaMovieGetAll[];
  cinemaMovieSchedule: { [key: string]: ObjHoursCinemaMovie[] } = {};
  next7Days!: next7DaysProps[];
  typesThatAlreadyClicked: string[] = [];
  containerTypeAll!: NodeListOf<HTMLElement>;
  typesMovieTheater: string[] = ["Normal", "Dublado", "Legendado", "Vip", "3D", "XD", "D-Box", "Macro XE", "IMAX", "CINEPIC", "Extreme", "4DX", "XPLUS"];
schedule: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private cinemaMovieService: CinemaMovieService){
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

      this.containerTypeAll = document.querySelectorAll(".container-type");
    }

    this.route.params.subscribe((movieData: any) => {
      let movieId = movieData.movieId;

      this.movieService.getInfoForChooseMovieTheater(movieId).subscribe((data: any) => {
        this.movieChooseMovieTheater = data.data;
      });

      this.cinemaMovieService.getMoviesAllTrending(movieId).subscribe((data: any) => {
        this.cinemaMovieGetAll = data.data;

        let objHour: { [key: string]: ObjHoursCinemaMovie[] } = {};
        let objHourAll: ObjHoursCinemaMovie[] = [];

        data.data.forEach((el: CinemaMovieGetAll) => {
          let array = el.screeningSchedule.split(',');

          let arrayOnlyDublado: string[] = [];
          let arrayOnlyLegendado: string[] = [];
          let arrayOnlyLegendadoVip: string[] = [];

          array.forEach((elInner: string) => {
            if(elInner.includes("D")){
              arrayOnlyDublado.push(elInner);
            }

            if(elInner.includes("L") && !elInner.includes("V")){
              arrayOnlyLegendado.push(elInner);
            }

            if(elInner.includes("LV")){
              arrayOnlyLegendadoVip.push(elInner);
            }
          });

          let objHoursDublado: ObjHoursCinemaMovie = {
            type: "DUBLADO",
            arryHours: arrayOnlyDublado
          }

          let objHoursLegendado: ObjHoursCinemaMovie = {
            type: "LEGENDADO",
            arryHours: arrayOnlyLegendado
          }

          let objHoursLegendadoVip: ObjHoursCinemaMovie = {
            type: "LV",
            arryHours: arrayOnlyLegendadoVip
          }

          if(objHoursDublado.arryHours.length > 0){
            objHourAll.push(objHoursDublado);
          }

          if(objHoursLegendado.arryHours.length > 0){
            objHourAll.push(objHoursLegendado);
          }

          if(objHoursLegendadoVip.arryHours.length > 0){
            objHourAll.push(objHoursLegendadoVip);
          }

          objHour[el.cinemaDTO.id] = objHourAll;
          arrayOnlyDublado = [];
          arrayOnlyLegendado = [];
          arrayOnlyLegendadoVip = [];
          objHourAll = [];
        });

        this.cinemaMovieSchedule = objHour;
        console.log(objHour);
      });
    });

    const today = new Date();
    const dayToday = today.getDate();

    const next7DaysEffect: next7DaysProps[] = [];

    for (let i = 0; i < 7; i++) {
      const day = addDays(today, i);

      const weekDay = format(day, 'E', { locale: ptBR });
      const formattedDay = format(day, 'dd', { locale: ptBR });
      const formattedMonth = format(day, 'MM', { locale: ptBR });

      if (dayToday === Number(formattedDay)) {
        // setWeekDay(weekDay)

        const objData = {
          dayYear: `${formattedDay}/${formattedMonth}`,
          weekDay: 'Hoje',
        };
        next7DaysEffect.push(objData);
      } else {
        const objData = {
          dayYear: `${formattedDay}/${formattedMonth}`,
          weekDay: weekDay.slice(0, 3),
        };
        next7DaysEffect.push(objData);
      }
    }

    this.next7Days = next7DaysEffect;
  }

  getCinemaArray() {
    return Object.keys(this.cinemaMovieSchedule).map(key => ({
      key: key,
      value: this.cinemaMovieSchedule[key]
    }));
  }

  replaceStringHours(hour: string){
    return hour.replace(/[^0-9:]/g, '');
  }

  descriptionMovieAbout(description: string): string {
    return description.substring(0, 105) + "...";
  }

  onClickContainerType(item: string){
    if(this.typesThatAlreadyClicked.some((el) => el === item)){
      this.typesThatAlreadyClicked = this.typesThatAlreadyClicked.filter((el) => el !== item);
    }else {
      this.typesThatAlreadyClicked.push(item);
    }

    this.containerTypeAll.forEach((elHtml: HTMLElement) => {
      let textContent = elHtml.textContent?.trim() || '';

      if(this.typesThatAlreadyClicked.some((el) => el === textContent)){
        elHtml.style.borderColor = "rgb(152 170 236 / 0%)";
        elHtml.style.color = "#fff";
        elHtml.style.background = "rgb(50 85 226)";
      }else {
        elHtml.style.borderColor = "rgb(152, 170, 236)";
        elHtml.style.color = "rgb(152, 170, 236)";
        elHtml.style.background = "transparent";
      }
    })
  }
}
