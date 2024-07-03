import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body-choose-seats',
  templateUrl: './body-choose-seats.component.html',
  styleUrl: './body-choose-seats.component.scss'
})
export class BodyChooseSeatsComponent implements OnInit, OnDestroy {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  private seatsNumberSubscription!: Subscription;
  arraySeats: string[] = [];
  items: number[] = [];


  constructor(private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService){
  }

  ngOnInit(): void {
    this.seatsNumberSubscription = this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
      this.items = Array.from({ length: amountSeats }, (_, i) => i);
    });
  }

  ngOnDestroy() {
    if (this.seatsNumberSubscription) {
      this.seatsNumberSubscription.unsubscribe();
    }
  }
}
