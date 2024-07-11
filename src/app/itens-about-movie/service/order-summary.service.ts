import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {
  private orderSummarySource = new BehaviorSubject<ObjectForOrderSummary | null>(null);
  currentOrderSummary$ = this.orderSummarySource.asObservable();

  setOrderSummary(orderSummary: ObjectForOrderSummary): void {
    this.orderSummarySource.next(orderSummary);
  }
}
