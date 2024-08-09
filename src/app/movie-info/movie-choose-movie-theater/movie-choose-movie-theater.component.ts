import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../home-page/services/movie.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { movieChooseMovieTheater } from '../../interface-models/movie-interface/movie-choose-movie-theater';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CinemaMovieService } from '../../home-page/services/cinema-movie.service';
import { CinemaMovieGetAll } from '../../interface-models/cinema-movie-interface/cinema-movie-get-all';
import { Location } from '@angular/common';

export interface next7DaysProps {
  dayYear: string;
  weekDay: string;
}

export interface ObjHoursCinemaMovie {
  type: string;
  typeResumido: string;
  arryHours: string[];
}

export interface ObjectForOrderSummary {
  movieId: string;
  title: string;
  movieRating: number;
  dayMonthAndDayWeek: string;
  typeMovieTheater: string;
  locationMovieTheater: string;
  spanRegion: string;
  imgMovie: string;
  room: number;
}

@Component({
  selector: 'app-movie-choose-movie-theater',
  templateUrl: './movie-choose-movie-theater.component.html',
  styleUrl: './movie-choose-movie-theater.component.scss'
})
export class MovieChooseMovieTheaterComponent implements OnInit, OnDestroy, AfterViewInit {
  movieChooseMovieTheater!: movieChooseMovieTheater;
  movieId: string = "";
  cinemaMovieGetAll: CinemaMovieGetAll[] = [];
  cinemaMovieGetAllFiltered: CinemaMovieGetAll[] = [];
  cinemaMovieSchedule: { [key: string]: ObjHoursCinemaMovie[] } = {};
  cinemaMovieScheduleFiltered: { [key: string]: ObjHoursCinemaMovie[] } = {};
  next7Days!: next7DaysProps[];
  typesThatAlreadyClicked: string[] = [];
  containerTypeAll!: NodeListOf<HTMLElement>;
  containerDateAll!: NodeListOf<HTMLElement>;
  containerDateFirst!: HTMLElement;
  arrayWhichTypeOfMovieTheaterHave: string[] = [];
  allIdCinemaMovie: string[] = [];
  mostrarCinemaMovieGetAllFiltered = true;
  clickedDetails = false;
  itemCinemaMovieClickedDetails!: CinemaMovieGetAll;
  private timeoutId: any;
  private timeoutIdSlide: any;
  isClickedSpanAbountTheMovie = false;
  spanSessions!: HTMLSpanElement;
  spanAboutTheMovie!: HTMLSpanElement;
  @ViewChild('containerScheduleDublado') containerScheduleDublado!: ElementRef<HTMLDivElement>;
  room = 0;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService, private cinemaMovieService: CinemaMovieService,
    private cdRef: ChangeDetectorRef
  ){
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(typeof document !== "undefined"){
        this.timeoutId = setTimeout(() => {
        document.body.style.backgroundColor = "rgb(4, 18, 24)";

        this.spanSessions = document.querySelector(".span-sessions") as HTMLSpanElement;
        this.spanAboutTheMovie = document.querySelector(".span-about-the-movie") as HTMLSpanElement;

        this.spanSessions?.addEventListener("click", () => {
          this.putValueSpanSessions();

          this.isClickedSpanAbountTheMovie = false;
        });

        this.spanAboutTheMovie?.addEventListener("click", () => {
          this.spanSessions.style.border = "none";
          this.spanSessions.style.fontWeight = '100';
          this.spanAboutTheMovie.style.borderBottom = "4px solid rgb(50, 85, 226)";
          this.spanAboutTheMovie.style.fontWeight = '600';

          this.isClickedSpanAbountTheMovie = true;
        });

        this.containerTypeAll = document.querySelectorAll(".container-type");
        this.containerDateAll = document.querySelectorAll(".container-date");

        if(this.containerDateAll[0]){
          this.containerDateAll[0].className = "container-date-1";
        }

        this.containerDateAll.forEach((el) => {
          el.addEventListener("click", () => this.onClickContainerDate(el));
        });
      }, 30);
    }

    this.route.params.subscribe((movieData: any) => {
      let movieId = movieData.movieId;
      this.movieId = movieId;

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

              if(!this.arrayWhichTypeOfMovieTheaterHave.some((el) => el === "Dublado")){
                this.arrayWhichTypeOfMovieTheaterHave.push("Dublado");
              }
            }

            if(elInner.includes("L") && !elInner.includes("V")){
              arrayOnlyLegendado.push(elInner);

              if(!this.arrayWhichTypeOfMovieTheaterHave.some((el) => el === "Legendado")){
                this.arrayWhichTypeOfMovieTheaterHave.push("Legendado");
              }
            }

            if(elInner.includes("LV")){
              arrayOnlyLegendadoVip.push(elInner);

              if(!this.arrayWhichTypeOfMovieTheaterHave.some((el) => el === "Legendado")){
                this.arrayWhichTypeOfMovieTheaterHave.push("Legendado");
              }

              if(!this.arrayWhichTypeOfMovieTheaterHave.some((el) => el === "Vip")){
                this.arrayWhichTypeOfMovieTheaterHave.push("Vip");
              }
            }
          });

          let objHoursDublado: ObjHoursCinemaMovie = {
            type: "DUBLADO",
            typeResumido: "D",
            arryHours: arrayOnlyDublado
          }

          let objHoursLegendado: ObjHoursCinemaMovie = {
            type: "LEGENDADO",
            typeResumido: "L",
            arryHours: arrayOnlyLegendado
          }

          let objHoursLegendadoVip: ObjHoursCinemaMovie = {
            type: "LV",
            typeResumido: "LV",
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
          this.allIdCinemaMovie.push(el.cinemaDTO.id);
          arrayOnlyDublado = [];
          arrayOnlyLegendado = [];
          arrayOnlyLegendadoVip = [];
          objHourAll = [];
        });

        this.cinemaMovieSchedule = objHour;
        this.getCinemaArray(objHour);
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
    this.onClickChooseSeatsForThisHour = this.onClickChooseSeatsForThisHour.bind(this);
    this.cdRef.detectChanges();
  }

  putValueSpanSessions(){
    this.spanSessions.style.borderBottom = "4px solid rgb(50, 85, 226)";
    this.spanSessions.style.fontWeight = '600';
    this.spanAboutTheMovie.style.border = "none";
    this.spanAboutTheMovie.style.fontWeight = '100';
  }

  onClickContainerDate(el: HTMLElement){

    this.containerDateAll.forEach((elFor) => {
      elFor.className = "container-date";
    });

    el.className = "container-date-1";
  }

  objHourss!: {key: string; value: ObjHoursCinemaMovie[];}[];
  objHoursToCinemaMovieScheduleFiltered: {key: string; value: ObjHoursCinemaMovie[];}[] = [];

  getCinemaArray(objHour: {[key: string]: ObjHoursCinemaMovie[] }) {
    let value = Object.keys(objHour).map(key => ({
      key: key,
      value: this.cinemaMovieSchedule[key]
    }));

    this.objHourss = value;
  }

  getCinemaArrayFiltered(cinemaMovieScheduleFiltered: {[key: string]: ObjHoursCinemaMovie[];}) {
    let value = Object.keys(cinemaMovieScheduleFiltered).map(key => ({
      key: key,
      value: cinemaMovieScheduleFiltered[key]
    }));

    this.objHoursToCinemaMovieScheduleFiltered = value;
  }

  replaceStringHours(hour: string){
    return hour.replace(/[^0-9:]/g, '');
  }

  onClickContainerType(item: string){
    if(this.typesThatAlreadyClicked.some((el) => el === item)){
      this.typesThatAlreadyClicked = this.typesThatAlreadyClicked.filter((el) => el !== item);

      if(this.typesThatAlreadyClicked.length <= 0){
        this.cinemaMovieScheduleFiltered = {};
        this.cinemaMovieGetAllFiltered = [];
        this.mostrarCinemaMovieGetAllFiltered = true;
      }else {
        let comparacaoDasStringPrimeiroCaractere = "";

        this.typesThatAlreadyClicked.forEach((el) => {
          comparacaoDasStringPrimeiroCaractere += el[0];
        });

        let idFilter: string[] = [];
        this.cinemaMovieGetAllFiltered = [];

        this.allIdCinemaMovie.forEach((id) => {
          let objHourAll: ObjHoursCinemaMovie[] = [];

          this.cinemaMovieSchedule[id].forEach((elSchedule) => {
            if(elSchedule.typeResumido.includes(comparacaoDasStringPrimeiroCaractere)){
              objHourAll.push(elSchedule);

              this.cinemaMovieScheduleFiltered[id] = objHourAll;

              if(!idFilter.includes(id)){
                idFilter.push(id);
              }
            }
          });
        });

        idFilter.forEach((eachId) => {
          this.cinemaMovieGetAllFiltered.push(this.cinemaMovieGetAll.filter((el) => el.cinemaDTO.id == eachId)[0]);
        });

        this.mostrarCinemaMovieGetAllFiltered = false;
      }
    }else {
      this.typesThatAlreadyClicked.push(item);

      let comparacaoDasStringPrimeiroCaractere = "";

      this.typesThatAlreadyClicked.forEach((el) => {
        comparacaoDasStringPrimeiroCaractere += el[0];
      });

      let idFilter: string[] = [];
      this.cinemaMovieGetAllFiltered = [];

      this.allIdCinemaMovie.forEach((id) => {
        let objHourAll: ObjHoursCinemaMovie[] = [];

        this.cinemaMovieSchedule[id].forEach((elSchedule) => {

          if(elSchedule.typeResumido.includes(comparacaoDasStringPrimeiroCaractere) || elSchedule.typeResumido.includes(comparacaoDasStringPrimeiroCaractere.split('').reverse().join('')) ){
            objHourAll.push(elSchedule);

            this.cinemaMovieScheduleFiltered[id] = objHourAll;

            if(!idFilter.includes(id)){
              idFilter.push(id);
            }
          }
        });
      });

      idFilter.forEach((eachId) => {
        this.cinemaMovieGetAllFiltered.push(this.cinemaMovieGetAll.filter((el) => el.cinemaDTO.id == eachId)[0]);
      });

      this.mostrarCinemaMovieGetAllFiltered = false;
    }

    this.getCinemaArrayFiltered(this.cinemaMovieScheduleFiltered);

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

  onClickSeats(item: CinemaMovieGetAll){
    clearTimeout(this.timeoutIdSlide);

    this.itemCinemaMovieClickedDetails = item;
    this.clickedDetails = !this.clickedDetails;

    if(typeof document !== "undefined"){
      document.body.style.overflow = "hidden";

      this.timeoutIdSlide = setTimeout(() => {
        let containerTypesOfTheWithdrawal = document.querySelector(".container-types-of-the-withdrawal") as HTMLElement;

        let clickeContainerAdjust = false;
        let startX: any;
        let scrollLeft: any;

        containerTypesOfTheWithdrawal?.addEventListener("mousedown", (e) => {

          clickeContainerAdjust = true;
          startX = e.pageX - containerTypesOfTheWithdrawal.offsetLeft;
          scrollLeft = containerTypesOfTheWithdrawal.scrollLeft;
        });

        containerTypesOfTheWithdrawal?.addEventListener("mouseup", (e) => {

          clickeContainerAdjust = false;
        });

        containerTypesOfTheWithdrawal?.addEventListener("mousemove", (e: any) => {

          if(!clickeContainerAdjust) return;
          e.preventDefault();

          const x = e.pageX - containerTypesOfTheWithdrawal.offsetLeft;
          const walk = (x - startX);
          containerTypesOfTheWithdrawal.scrollLeft = scrollLeft - walk;
        });
      }, 1);
    }
  }

  onClickChooseSeatsForThisHour(movieChooseMovieTheater: movieChooseMovieTheater, item: CinemaMovieGetAll, itemHour: string, containerScheduleDublado: ElementRef<HTMLDivElement> | null): void{
    // container-date -> pegar esse 'querySelector'
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

      let containerDate = document.querySelector(".container-date-1");
      let spanDayMonth = containerDate?.firstChild?.textContent;
      let indiceDia = new Date().getDay();

      const nomeDia = diasDaSemana[indiceDia];
      let nameDaySplit = nomeDia.slice(0, 3).toUpperCase();

      itemHour = itemHour.trim();
      spanDayMonth = spanDayMonth?.trim();
      nameDaySplit = nameDaySplit.trim();

      let dayMonthAndDayWeek = `${nameDaySplit} ${spanDayMonth} ${itemHour.slice(0, 5)}`;
      let typeMovieTheater = "";

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

  onClickExitSvg(){
    if(typeof document !== "undefined"){
      document.body.style.overflow = "auto";
    }

    this.clickedDetails = !this.clickedDetails;
  }

  onSeeSessions(){
    this.putValueSpanSessions();

    this.isClickedSpanAbountTheMovie = false;
  }

  ngOnDestroy(): void {
    if(this.timeoutId){
      clearTimeout(this.timeoutId);
    }
    // if(localStorage){
    //   localStorage.removeItem('reloaded');
    // }
  }
}
