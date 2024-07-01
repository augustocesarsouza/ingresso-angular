import { Component, Input, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  stringFullOnlyDate = "";
  stringOnlyHour = "";

  ngOnInit(): void {
    if(this.objectForOrderSummary){
      let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
      this.stringFullOnlyDate = `${stringDayMonth[0]} ${stringDayMonth[1]}`;
      this.stringOnlyHour = stringDayMonth[2];
    }
  }

  constructor(){
  }

  titleMovie(title: string): string {
    return title.substring(0, 18) + "...";
  }
}
