import { Component, Input, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';

@Component({
  selector: 'app-choose-seats-inner',
  templateUrl: './choose-seats-inner.component.html',
  styleUrl: './choose-seats-inner.component.scss'
})
export class ChooseSeatsInnerComponent implements OnInit {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  stringFullOnlyDate = "";
  stringOnlyHour = "";

  constructor(){
  }

  ngOnInit(): void {
    if(this.objectForOrderSummary){
      let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
      this.stringFullOnlyDate = `${stringDayMonth[0]} ${stringDayMonth[1]}`;
      this.stringOnlyHour = stringDayMonth[2];
    }
  }
}
