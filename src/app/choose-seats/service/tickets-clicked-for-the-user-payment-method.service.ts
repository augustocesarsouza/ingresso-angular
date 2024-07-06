import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormsOfPaymentClicked } from '../body-choose-seats/body-choose-seats.component';

@Injectable({
  providedIn: 'root'
})
export class TicketsClickedForTheUserPaymentMethodService {
  private listOfFormPaymentClicked = new BehaviorSubject<FormsOfPaymentClicked[]>([]);
  numberOfTheTicketsClicked$ = this.listOfFormPaymentClicked.asObservable();

  constructor() { }

  updateNumberOfTheClickSeats(FormsOfPaymentClicked: FormsOfPaymentClicked[]) {
    this.listOfFormPaymentClicked.next(FormsOfPaymentClicked);
  }

  get currentSeats(): FormsOfPaymentClicked[] {
    return this.listOfFormPaymentClicked.getValue();
  }
}
