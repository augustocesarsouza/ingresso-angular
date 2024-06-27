import { Component, Input, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';

@Component({
  selector: 'app-body-choose-seats',
  templateUrl: './body-choose-seats.component.html',
  styleUrl: './body-choose-seats.component.scss'
})
export class BodyChooseSeatsComponent implements OnInit {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  stringFullOnlyDate = "";
  stringOnlyHour = "";
  seats: number[] = Array.from({ length: 34 }, (_, i) => i + 1);

  constructor(){
  }

  ngOnInit(): void {
    let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
    console.log(this.objectForOrderSummary);
    this.stringFullOnlyDate = `${stringDayMonth[0]} ${stringDayMonth[1]}`;
    this.stringOnlyHour = stringDayMonth[2];
  }
}
