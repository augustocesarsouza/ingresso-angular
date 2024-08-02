import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { TicketsClickedForTheUserPaymentMethodService } from '../service/tickets-clicked-for-the-user-payment-method.service';
import { NumberOfTheTicketsClickedService } from '../service/number-of-the-tickets-clicked.service';
import { PositionType } from '../enum/app.enums-type-of-itens';
import { CanPassToPopcornService } from '../service/can-pass-to-popcorn.service';

@Component({
  selector: 'app-back-or-progress-footer',
  templateUrl: './back-or-progress-footer.component.html',
  styleUrl: './back-or-progress-footer.component.scss'
})
export class BackOrProgressFooterComponent implements OnInit, AfterViewInit {
  private subscription: Subscription[] = [];
  items: number[] = [];
  itemsPaymentClicked: number[] = [];
  whatFunctionClicked = 'seats';

  buttonSeats!: HTMLElement;
  buttonBack!: HTMLElement;
  timeoutGetSeatsAny: any;

  constructor(private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService, private witch_function_was_clicked_service: WitchFunctionWasClickedService, private tickets_clicked_for_the_user_payment_method_service: TicketsClickedForTheUserPaymentMethodService, private number_of_the_tickets_clicked_service: NumberOfTheTicketsClickedService,
    private can_pass_to_popcorn_service: CanPassToPopcornService
  ){
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(typeof document === 'undefined') return;

    let buttonSeats = document.querySelector(".button-seats") as HTMLElement;
    let buttonBack = document.querySelector(".button-back") as HTMLElement;

    this.buttonSeats = buttonSeats;
    this.buttonBack = buttonBack;

    this.subscription.push(this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
      if(whatFunctionClicked.length <= 0) return;

      clearTimeout(this.timeoutGetSeatsAny);

      this.timeoutGetSeatsAny = setTimeout(() => {
        buttonSeats = document.querySelector(".button-seats") as HTMLElement;
      }, 100);

      this.whatFunctionClicked = whatFunctionClicked;

      if(whatFunctionClicked === PositionType.Seats){
        this.can_pass_to_popcorn_service.updateCanPassOnToPorcorn(false);
        this.itemsPaymentClicked = [];
        this.tickets_clicked_for_the_user_payment_method_service.updateNumberOfTheClickSeats([]);
      }

      if(whatFunctionClicked !== PositionType.Seats){
        buttonBack.style.border = "3px solid rgb(152, 170, 236)";
        buttonBack.style.color = "rgb(152, 170, 236)";
        buttonBack.style.cursor = "pointer";
        buttonBack.style.fontWeight = "700";
      }
    }));

    const buttonSeatsMouseEnter = () => {
      if(buttonSeats){
        buttonSeats.style.backgroundImage = "linear-gradient(to right, rgb(206, 165, 0), rgb(206, 110, 0))";
      }
    }

    const buttonSeatsMouseLeave = () => {
      if(buttonSeats){
        buttonSeats.style.backgroundImage = "linear-gradient(to right, rgb(255, 206, 0), rgb(255, 136, 0))";
      }
    }

    this.subscription.push(this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
      this.items = Array.from({ length: amountSeats }, (_, i) => i);

      if(this.items.length <= 0){
        if(buttonSeats){
          buttonSeats.style.backgroundColor = "rgb(102, 102, 102)";
          buttonSeats.style.color = "rgb(33, 38, 45)";
          buttonSeats.style.backgroundImage = "none";
          buttonSeats.style.cursor = "not-allowed";

          buttonSeats.removeEventListener("mouseenter", buttonSeatsMouseEnter);
          buttonSeats.removeEventListener("mouseleave", buttonSeatsMouseLeave);
        }
      }else {
        if(buttonSeats){
          buttonSeats.style.backgroundColor = "rgb(152, 170, 236)";
          buttonSeats.style.color = "rgb(33, 38, 45)";
          buttonSeats.style.backgroundImage = "linear-gradient(to right, rgb(255, 206, 0), rgb(255, 136, 0))";
          buttonSeats.style.cursor = "pointer";

          buttonSeats.addEventListener("mouseenter", buttonSeatsMouseEnter);
          buttonSeats.addEventListener("mouseleave", buttonSeatsMouseLeave);
        }
      }
    }));

    this.subscription.push(this.number_of_the_tickets_clicked_service.numberOfTheClickTickets$.subscribe((ticketsClickedArray) => {
      this.itemsPaymentClicked = ticketsClickedArray;
    }));
  }

  onClickSeats(){
    if(this.items.length <= 0) return;

    this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Tickets);
  }

  onClickGoToPopcorn(){
    if(this.can_pass_to_popcorn_service.currentCanPassOnToPorcorn){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Popcorn);
    }
  }

  onClickGoToPayment(){
    let userLocalStorage = localStorage.getItem("userLogin");

    if(userLocalStorage !== "null"){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Payment);
    }else {

    }
  }

  onClickBack(){
    if(this.whatFunctionClicked === PositionType.Tickets){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Seats);
    }else if(this.whatFunctionClicked === PositionType.Popcorn){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Tickets);
    }else if(this.whatFunctionClicked === PositionType.Payment){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Popcorn);
    }
  }
}
