import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../home-page/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { movieChooseMovieTheater } from '../../interface-movie-and-theater/movie-interface/movie-choose-movie-theater';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface next7DaysProps {
  dayYear: string;
  weekDay: string;
}

@Component({
  selector: 'app-movie-choose-movie-theater',
  templateUrl: './movie-choose-movie-theater.component.html',
  styleUrl: './movie-choose-movie-theater.component.scss'
})
export class MovieChooseMovieTheaterComponent implements OnInit {
  movieChooseMovieTheater!: movieChooseMovieTheater;
  next7Days!: next7DaysProps[];
  typesThatAlreadyClicked: string[] = [];
  containerTypeAll!: NodeListOf<HTMLElement>;
  typesMovieTheater: string[] = ["Normal", "Dublado", "Legendado", "Vip", "3D", "XD", "D-Box", "Macro XE", "IMAX", "CINEPIC", "Extreme", "4DX", "XPLUS"];

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

      this.containerTypeAll = document.querySelectorAll(".container-type");
    }

    this.route.params.subscribe((movieData: any) => {
      let movieId = movieData.movieId;
      this.movieService.getInfoForChooseMovieTheater(movieId).subscribe((data: any) => {
        this.movieChooseMovieTheater = data.data;
      });
    });

    // let next7Days: next7DaysProps[] = []; isso é userState
    // let weekDay = ''; isso é userState

    // if (next7Days.length > 0) return;

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
