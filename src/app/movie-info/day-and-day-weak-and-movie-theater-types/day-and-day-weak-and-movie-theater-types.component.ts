import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface next7DaysProps {
  dayYear: string;
  weekDay: string;
}

@Component({
  selector: 'app-day-and-day-weak-and-movie-theater-types',
  templateUrl: './day-and-day-weak-and-movie-theater-types.component.html',
  styleUrl: './day-and-day-weak-and-movie-theater-types.component.scss'
})
export class DayAndDayWeakAndMovieTheaterTypesComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() arrayWhichTypeOfMovieTheaterHave: string[] = [];
  @Input() onClickContainerType!: (item: string) => void;

  containerDateAll!: NodeListOf<HTMLElement>;
  next7Days!: next7DaysProps[];

  constructor(){
  }

  ngOnInit(): void {
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

  ngAfterViewInit(): void {
    if(typeof document === "undefined") return;

    this.containerDateAll = document.querySelectorAll(".container-date") as NodeListOf<HTMLElement>;

    if(this.containerDateAll[0]){
      this.containerDateAll[0].className = "container-date-1";
    }

    this.containerDateAll.forEach((el) => {
      el.addEventListener("click", () => this.onClickContainerDate(el));
    });
  }

  onClickContainerDate(el: HTMLElement){
    this.containerDateAll.forEach((elFor) => {
      elFor.className = "container-date";
    });

    el.className = "container-date-1";
  }

  ngOnDestroy(): void {
  }
}
