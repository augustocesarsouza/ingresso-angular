import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { SeatsService } from '../service/seats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  stringFullOnlyDate = "";
  stringOnlyHour = "";
  private seatsSubscription!: Subscription;
  seatsClickedForTheUser: string[] = [];

  ngOnInit(): void {
    if(this.objectForOrderSummary){
      let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
      this.stringFullOnlyDate = `${stringDayMonth[0]} ${stringDayMonth[1]}`;
      this.stringOnlyHour = stringDayMonth[2];
    }

    this.seatsSubscription = this.seats_service.arraySeats$.subscribe((seats) => {
      this.seatsClickedForTheUser = seats;
    });
  }

  constructor(private seats_service: SeatsService){
  }

  titleMovie(title: string): string {
    return title.substring(0, 18) + "...";
  }

  ngOnDestroy() {
    if (this.seatsSubscription) {
      this.seatsSubscription.unsubscribe();
    }
  }
}
