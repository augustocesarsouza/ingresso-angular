import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { TicketsClickedForTheUserPaymentMethodService } from '../service/tickets-clicked-for-the-user-payment-method.service';
import { NumberOfTheTicketsClickedService } from '../service/number-of-the-tickets-clicked.service';

@Component({
  selector: 'app-back-or-progress-footer',
  templateUrl: './back-or-progress-footer.component.html',
  styleUrl: './back-or-progress-footer.component.scss'
})
export class BackOrProgressFooterComponent implements OnInit {
  private subscription: Subscription[] = [];
  items: number[] = [];
  itemsPaymentClicked: number[] = [];
  whatFunctionClicked = 'seats';

  constructor(private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService, private witch_function_was_clicked_service: WitchFunctionWasClickedService, private tickets_clicked_for_the_user_payment_method_service: TicketsClickedForTheUserPaymentMethodService, private number_of_the_tickets_clicked_service: NumberOfTheTicketsClickedService){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      this.subscription.push(this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
        this.items = Array.from({ length: amountSeats }, (_, i) => i);
      }));

      this.subscription.push(this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
        if(whatFunctionClicked.length <= 0) return;

        this.whatFunctionClicked = whatFunctionClicked;

        if(whatFunctionClicked === "seats"){
          this.itemsPaymentClicked = [];
          this.tickets_clicked_for_the_user_payment_method_service.updateNumberOfTheClickSeats([]);
        }
      }));

      this.subscription.push(this.number_of_the_tickets_clicked_service.numberOfTheClickTickets$.subscribe((ticketsClickedArray) => {
        this.itemsPaymentClicked = ticketsClickedArray;
      }));
    }

  }
}
