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
  arraySeats: string[] = [];
  stringSeats = "";

  ngOnInit(): void {
    if(this.objectForOrderSummary){
      let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
      this.stringFullOnlyDate = `${stringDayMonth[0]} ${stringDayMonth[1]}`;
      this.stringOnlyHour = stringDayMonth[2];
    }

    this.seatsSubscription = this.seats_service.arraySeats$.subscribe((seatsElClicked) => {
      if(this.arraySeats[0] === ""){
        this.arraySeats.shift();
      }

      if(this.arraySeats.some((el) => el === seatsElClicked)){
        this.arraySeats = this.arraySeats.filter((el) => el !== seatsElClicked);
      }else {
        if(this.arraySeats.length <= 8){
          this.arraySeats.push(seatsElClicked);
        }
      }

      if(this.arraySeats.length <= 1){
        this.stringSeats = this.arraySeats[0];
      }else {
        this.stringSeats = "";
        for (let i = 0; i < this.arraySeats.length; i++) {
          this.stringSeats += this.arraySeats[i];

          if(this.arraySeats.length > i + 1){
            this.stringSeats += ", "
          }
        }
      }

      if(this.arraySeats.length === 0){
        this.stringSeats = "";
      }

      console.log(this.arraySeats.length);

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
