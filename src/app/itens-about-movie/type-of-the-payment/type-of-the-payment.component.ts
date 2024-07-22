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
import { TypeOfThePaymentService } from '../service/type-of-the-payment.service';

interface FormsOfPayment {
  formName: string;
  price: string;
}

export interface ItensClickedByUser {
  formName: string;
  quantityClicked: number;
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
  private timeoutIdContainerTypeAll: any;
  items: number[] = [];
  itemsPaymentClicked: number[] = [];
  formsOfPayment: FormsOfPayment[] = [];
  whatFunctionClicked = 'tickets';
  containerLessAndMore!: NodeListOf<HTMLElement>;
  quantityAlreadyBeenClickedLessMore = 0;
  listOfFormPaymentClicked: FormsOfPaymentClicked[] = [];
  itensClickedByUser: ItensClickedByUser[] = [];

  constructor(private form_of_payment_service: FormOfPaymentService, private tickets_clicked_for_the_user_payment_method_service: TicketsClickedForTheUserPaymentMethodService,
    private witch_function_was_clicked_service: WitchFunctionWasClickedService, private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService,
    private number_of_the_tickets_clicked_service: NumberOfTheTicketsClickedService, order_summary_service: OrderSummaryService,
    private type_of_the_payment_service: TypeOfThePaymentService
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

      this.subscription.push(this.type_of_the_payment_service.itensClickedTypeOfPayment$.subscribe((itens) => {
        this.itensClickedByUser = itens;
      }));

      if(this.timeoutIdContainerLessAndMore){
        clearTimeout(this.timeoutIdContainerLessAndMore);
      }

      this.timeoutIdContainerLessAndMore = setTimeout(() => {
        this.containerLessAndMore = document.querySelectorAll(".container-less-and-more");
        if(this.containerLessAndMore.length <= 0) return;

        let containerTypeAll = document.querySelectorAll(".container-type") as NodeListOf<HTMLElement>;

        if(this.itensClickedByUser.length > 0){
          this.containerLessAndMore.forEach((container) => {
          let containerLess = container.firstChild as HTMLElement;
          let containerMore = container.lastChild as HTMLElement;

          containerLess.style.backgroundColor = "rgb(63, 71, 93)";
          containerLess.style.cursor = "auto";

          containerMore.style.backgroundColor = "rgb(63, 71, 93)";
          containerMore.style.cursor = "auto";
          });
        }

        containerTypeAll.forEach((container) => {
          let firstElement = container.firstChild as HTMLElement;
          let LastElement = container.lastChild as HTMLElement;

          let spanNameType = firstElement.querySelector(".span-form-name");

          this.itensClickedByUser.forEach((el) => {
            if(spanNameType && el.formName === spanNameType.textContent){
              this.quantityAlreadyBeenClickedLessMore += el.quantityClicked;
              let containerLess = LastElement.firstChild as HTMLElement;
              let containerMore = LastElement.lastChild as HTMLElement;

              containerLess.style.backgroundColor = "rgb(152, 170, 236)";
              containerLess.style.cursor = "pointer";

              containerMore.style.backgroundColor = "rgb(63, 71, 93)";
              containerMore.style.cursor = "auto";

              let spanQuantityMore = LastElement.querySelector(".span-quantity-more");
              if(spanQuantityMore){
                spanQuantityMore.textContent = el.quantityClicked.toString();
              }
            }
          })
        });
      }, 40);

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

  onClickMoreButton(form: FormsOfPayment, containerLessAndMore: HTMLDivElement){
    // QUANDO CLICAR EM MAIS SALVAR O VALOR QUE FOI CLICACO TIPO O NOME DO TIPO E QUANTAS VEZES PARA DEPOIS
    // QUANDO EU VOLTAR PARA A ABA 'TOPOS DE INGRESSOS' EU CONSEGUIR COLOCAR DENOVO NOS SPANS DELE
    let spanQuantityMore = containerLessAndMore.querySelector(".span-quantity-more");

    if(spanQuantityMore && Number(spanQuantityMore.textContent) >= 0 && Number(spanQuantityMore.textContent) < this.items.length && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      let value = Number(spanQuantityMore.textContent) + 1;
      spanQuantityMore.textContent = value.toString();
      this.quantityAlreadyBeenClickedLessMore += 1;
      this.type_of_the_payment_service.updateQuantityAlreadyBeenClickedLessMore(this.quantityAlreadyBeenClickedLessMore);

      if(this.itensClickedByUser.some((el) => el.formName === form.formName)){
        this.itensClickedByUser.map((el) => {
          if(el.formName === form.formName){
            el.quantityClicked += 1;
          }

          return el;
        })
      }else {
        this.itensClickedByUser.push({ formName: form.formName, quantityClicked: 1 });
      }

      this.type_of_the_payment_service.updateItensClickedTypeOfPayment(this.itensClickedByUser);

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

        if(this.items.length >= Number(spanQuantityMore.textContent)){
          let containerMore = containerLessAndMore.lastChild as HTMLElement;
          containerMore.style.backgroundColor = "rgb(63, 71, 93)";
          containerMore.style.cursor = "auto";
        }
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
      this.type_of_the_payment_service.updateQuantityAlreadyBeenClickedLessMore(this.quantityAlreadyBeenClickedLessMore);

      this.itensClickedByUser.map((el) => {
        if(el.formName === form.formName){
          el.quantityClicked -= 1;
        }

        return el;
      });

      this.itensClickedByUser = this.itensClickedByUser.filter((el) => el.quantityClicked > 0);

      this.type_of_the_payment_service.updateItensClickedTypeOfPayment(this.itensClickedByUser);

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

      if(this.quantityAlreadyBeenClickedLessMore <= 0){
        this.containerLessAndMore.forEach((el) => {
          let containerLess = el.firstChild as HTMLElement;
          containerLess.style.backgroundColor = "rgb(63, 71, 93)";
          containerLess.style.cursor = "auto";

          let containerMore = el.lastChild as HTMLElement;
          containerMore.style.backgroundColor = "rgb(152, 170, 236";
          containerMore.style.cursor = "pointer";
        });
      }
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

    if(this.timeoutIdContainerTypeAll){
      clearTimeout(this.timeoutIdContainerTypeAll);
    }
  }
}
