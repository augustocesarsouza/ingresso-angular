import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { Router } from '@angular/router';
import { OrderSummaryService } from '../service/order-summary.service';
import { Subscription } from 'rxjs';
import { SeatsService } from '../service/seats.service';

@Component({
  selector: 'app-only-seats',
  templateUrl: './only-seats.component.html',
  styleUrl: './only-seats.component.scss'
})
export class OnlySeatsComponent implements OnInit, OnDestroy {
  objectForOrderSummary!: ObjectForOrderSummary;
  private subscription: Subscription[] = [];

  constructor(order_summary_service: OrderSummaryService, private SeatsClickedService: SeatsService){
    this.subscription.push(order_summary_service.currentOrderSummary$.subscribe((orderSummary) => {
      if(orderSummary){
        this.objectForOrderSummary = orderSummary;
      }
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
