import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormOfPaymentService } from '../service/form-of-payment.service';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { TicketsClickedForTheUserPaymentMethodService } from '../service/tickets-clicked-for-the-user-payment-method.service';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { NumberOfTheTicketsClickedService } from '../service/number-of-the-tickets-clicked.service';
import { OrderSummaryService } from '../service/order-summary.service';
import { FormsOfPaymentClicked } from '../body-choose-seats/body-choose-seats.component';

interface FormsOfPayment {
  formName: string;
  price: string;
}

@Component({
  selector: 'app-type-of-the-payment',
  templateUrl: './type-of-the-payment.component.html',
  styleUrl: './type-of-the-payment.component.scss'
})
export class TypeOfThePaymentComponent implements OnInit, OnDestroy {
  objectForOrderSummary!: ObjectForOrderSummary;
  private subscription: Subscription[] = [];
  private timeoutIdContainerLessAndMore: any;
  items: number[] = [];
  itemsPaymentClicked: number[] = [];
  formsOfPayment: FormsOfPayment[] = [];
  whatFunctionClicked = 'tickets';
  containerLessAndMore!: NodeListOf<HTMLElement>;
  quantityAlreadyBeenClickedLessMore = 0;
  listOfFormPaymentClicked: FormsOfPaymentClicked[] = [];

  constructor(private form_of_payment_service: FormOfPaymentService, private tickets_clicked_for_the_user_payment_method_service: TicketsClickedForTheUserPaymentMethodService,
    private witch_function_was_clicked_service: WitchFunctionWasClickedService, private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService,
    private number_of_the_tickets_clicked_service: NumberOfTheTicketsClickedService, order_summary_service: OrderSummaryService
  ){
    this.subscription.push(order_summary_service.currentOrderSummary$.subscribe((orderSummary) => {
      if(orderSummary){
        this.objectForOrderSummary = orderSummary;
      }
    }));
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      this.subscription.push(this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
        this.items = Array.from({ length: amountSeats }, (_, i) => i);
      }));

      this.subscription.push(this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
        if(whatFunctionClicked.length <= 0) return;

        this.whatFunctionClicked = whatFunctionClicked;
      }));

      if(this.timeoutIdContainerLessAndMore){
        clearTimeout(this.timeoutIdContainerLessAndMore);
      }

      this.timeoutIdContainerLessAndMore = setTimeout(() => {
        this.containerLessAndMore = document.querySelectorAll(".container-less-and-more");
      }, 20);

      if(this.objectForOrderSummary && this.objectForOrderSummary.movieId !== undefined){
        this.form_of_payment_service.getMovieIdInfo(this.objectForOrderSummary.movieId).subscribe({
          next: (data: any) => {
            this.formsOfPayment = data.data;
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    }
  }

  onClickMoreButton(form: FormsOfPayment, containerLessAndMore: HTMLDivElement){// FAZER O CLICK QUANDO CLICAR EM UM TYPEPAYMENT COLOCAR A COR NA 'PIPOCA'
    let spanQuantityMore = containerLessAndMore.querySelector(".span-quantity-more");

    if(spanQuantityMore && Number(spanQuantityMore.textContent) >= 0 && Number(spanQuantityMore.textContent) < this.items.length && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      let value = Number(spanQuantityMore.textContent) + 1;
      spanQuantityMore.textContent = value.toString();
      this.quantityAlreadyBeenClickedLessMore += 1;

      this.itemsPaymentClicked = Array.from({ length: this.quantityAlreadyBeenClickedLessMore }, (_, i) => i);
      this.number_of_the_tickets_clicked_service.updateNumberOfTheClickTickets(this.itemsPaymentClicked);

      if(this.listOfFormPaymentClicked.some((paymenet) => paymenet.formName === form.formName)){
        this.listOfFormPaymentClicked.map((el) => {
          if(el.formName === form.formName){
            el.quantityClicked += 1;
            let priceNumber = el.price * el.quantityClicked;
            let priceString = priceNumber.toString().replace(".", ",");
            el.priceTotal = priceString;
          }

          return el;
        });
      }else {
        this.listOfFormPaymentClicked.push({formName: form.formName, price: Number(form.price.replace(',', '.')), priceTotal: form.price, quantityClicked: 1});
      }

      this.tickets_clicked_for_the_user_payment_method_service.updateNumberOfTheClickSeats(this.listOfFormPaymentClicked);

      if(spanQuantityMore && Number(spanQuantityMore.textContent) > 0){
        let containerLess = containerLessAndMore.firstChild as HTMLElement;
        containerLess.style.backgroundColor = "rgb(152, 170, 236)";
        containerLess.style.cursor = "pointer";
      }

      if(this.quantityAlreadyBeenClickedLessMore === this.items.length){
          this.containerLessAndMore.forEach((el) => {
          let containerMore = el.lastChild as HTMLElement;

          containerMore.style.backgroundColor = "rgb(63, 71, 93)";
          containerMore.style.cursor = "auto";
        });
      }
    }
  }

  onClickLessButton(form: FormsOfPayment, containerLessAndMore: HTMLDivElement){
    let spanQuantityMore = containerLessAndMore.querySelector(".span-quantity-more");

    if(spanQuantityMore && Number(spanQuantityMore.textContent) > 0){
      let value = Number(spanQuantityMore.textContent) - 1;
      spanQuantityMore.textContent = value.toString();
      this.quantityAlreadyBeenClickedLessMore -= 1;

      this.itemsPaymentClicked = Array.from({ length: this.quantityAlreadyBeenClickedLessMore }, (_, i) => i);
      this.number_of_the_tickets_clicked_service.updateNumberOfTheClickTickets(this.itemsPaymentClicked);

      this.listOfFormPaymentClicked.map((el) => {
        if(el.formName === form.formName && el.quantityClicked > 0){
          el.quantityClicked -= 1;
          let priceNumber = el.price * el.quantityClicked;
          let priceString = priceNumber.toString().replace(".", ",");
          el.priceTotal = priceString;
        }

        return el;
      });

      this.listOfFormPaymentClicked = this.listOfFormPaymentClicked.filter((el) => el.quantityClicked > 0);

      this.tickets_clicked_for_the_user_payment_method_service.updateNumberOfTheClickSeats(this.listOfFormPaymentClicked);

      if(this.quantityAlreadyBeenClickedLessMore < this.items.length){
        this.containerLessAndMore.forEach((el) => {

          let containerMore = el.lastChild as HTMLElement;
          containerMore.style.backgroundColor = "rgb(152, 170, 236";
          containerMore.style.cursor = "pointer";

          if(spanQuantityMore && Number(el.textContent) <= 0 ){
            let containerLess = el.firstChild as HTMLElement;
            containerLess.style.backgroundColor = "rgb(63, 71, 93)";
            containerLess.style.cursor = "auto";
          }
        });
      }
    }
  }

  onMouseEnterLess($event: MouseEvent, form: FormsOfPayment){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;
    if(elementMain)

    if(elementMain && Number(elementMain.textContent) > 0 ){
      element.style.backgroundColor = "rgb(152, 170, 236)";
    }
  }

  onMouseLeaveLess($event: MouseEvent, form: FormsOfPayment){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) > 0){
      element.style.backgroundColor = "rgb(114, 130, 182)";
    }
  }

  onMouseEnterMore($event: MouseEvent, form: FormsOfPayment){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) >= 0 && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      element.style.backgroundColor = "rgb(114, 130, 182)";
    }
  }

  onMouseLeaveMore($event: MouseEvent, form: FormsOfPayment){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) >= 0 && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      element.style.backgroundColor = "rgb(152, 170, 236)";
    }
  }

  ngOnDestroy() {
    if(this.subscription.length > 0){
      this.subscription.forEach((el) => {
        el.unsubscribe();
      })
    }

    if(this.timeoutIdContainerLessAndMore){
      clearTimeout(this.timeoutIdContainerLessAndMore);
    }
  }
}
