import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BomboniereService } from '../service-bomboniere/bomboniere.service';
import { OrderSummaryService } from '../service/order-summary.service';

interface Product {
  title: string;
  imgUrl: string;
  price: string;
  fee: string;
}

@Component({
  selector: 'app-bomboniere',
  templateUrl: './bomboniere.component.html',
  styleUrl: './bomboniere.component.scss'
})
export class BomboniereComponent implements OnInit {
  listProductForChoose: Product[] = [];
  private subscription: Subscription[] = [];
  private timeoutIdContainerLessAndMore: any;
  items: number[] = [];
  numberItemsMaxProduct = 8;
  itemsPaymentClicked: number[] = [];
  // formsOfPayment: FormsOfPayment[] = [];
  whatFunctionClicked = 'tickets';
  containerLessAndMore!: NodeListOf<HTMLElement>;
  quantityAlreadyBeenClickedLessMore = 0;
  // listOfFormPaymentClicked: FormsOfPaymentClicked[] = [];

  constructor(private bomboniere_service: BomboniereService, private order_summary_service: OrderSummaryService){
  }

  ngOnInit(): void {
    this.items = Array.from({ length: this.numberItemsMaxProduct }, (_, i) => i);
    if(typeof document !== 'undefined'){
      this.subscription.push(this.order_summary_service.currentOrderSummary$.subscribe((el) => {
        if(el){
          this.bomboniere_service.getMovieIdInfo(el.movieId).subscribe((result: any) => {
            this.listProductForChoose = result.data;
          });
        }
      }));

      if(this.timeoutIdContainerLessAndMore){
        clearTimeout(this.timeoutIdContainerLessAndMore);
      }

      this.timeoutIdContainerLessAndMore = setTimeout(() => {
        this.containerLessAndMore = document.querySelectorAll(".container-less-and-more-product");
      }, 50);
    }
  }

  onClickMoreButton(form: Product, containerLessAndMore: HTMLDivElement){// FAZER O CLICK QUANDO CLICAR EM UM TYPEPAYMENT COLOCAR A COR NA 'PIPOCA'
    let spanQuantityMore = containerLessAndMore.querySelector(".span-quantity-more");

    if(spanQuantityMore && Number(spanQuantityMore.textContent) >= 0 && Number(spanQuantityMore.textContent) < this.items.length && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      let value = Number(spanQuantityMore.textContent) + 1;
      spanQuantityMore.textContent = value.toString();
      this.quantityAlreadyBeenClickedLessMore += 1;

      // this.itemsPaymentClicked = Array.from({ length: this.quantityAlreadyBeenClickedLessMore }, (_, i) => i);
      // this.number_of_the_tickets_clicked_service.updateNumberOfTheClickTickets(this.itemsPaymentClicked);

      // if(this.listOfFormPaymentClicked.some((paymenet) => paymenet.formName === form.formName)){
      //   this.listOfFormPaymentClicked.map((el) => {
      //     if(el.formName === form.formName){
      //       el.quantityClicked += 1;
      //       let priceNumber = el.price * el.quantityClicked;
      //       let priceString = priceNumber.toString().replace(".", ",");
      //       el.priceTotal = priceString;
      //     }

      //     return el;
      //   });
      // }else {
      //   this.listOfFormPaymentClicked.push({formName: form.formName, price: Number(form.price.replace(',', '.')), priceTotal: form.price, quantityClicked: 1});
      // }

      // this.tickets_clicked_for_the_user_payment_method_service.updateNumberOfTheClickSeats(this.listOfFormPaymentClicked);

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

  onClickLessButton(form: Product, containerLessAndMore: HTMLDivElement){
    let spanQuantityMore = containerLessAndMore.querySelector(".span-quantity-more");

    if(spanQuantityMore && Number(spanQuantityMore.textContent) > 0){
      let value = Number(spanQuantityMore.textContent) - 1;
      spanQuantityMore.textContent = value.toString();
      this.quantityAlreadyBeenClickedLessMore -= 1;

      // this.itemsPaymentClicked = Array.from({ length: this.quantityAlreadyBeenClickedLessMore }, (_, i) => i);
      // this.number_of_the_tickets_clicked_service.updateNumberOfTheClickTickets(this.itemsPaymentClicked);

      // this.listOfFormPaymentClicked.map((el) => {
      //   if(el.formName === form.formName && el.quantityClicked > 0){
      //     el.quantityClicked -= 1;
      //     let priceNumber = el.price * el.quantityClicked;
      //     let priceString = priceNumber.toString().replace(".", ",");
      //     el.priceTotal = priceString;
      //   }

      //   return el;
      // });

      // this.listOfFormPaymentClicked = this.listOfFormPaymentClicked.filter((el) => el.quantityClicked > 0);

      // this.tickets_clicked_for_the_user_payment_method_service.updateNumberOfTheClickSeats(this.listOfFormPaymentClicked);

      if(this.quantityAlreadyBeenClickedLessMore < this.items.length){
        console.log(this.containerLessAndMore);

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

  onMouseEnterLess($event: MouseEvent, form: Product){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;
    if(elementMain)

    if(elementMain && Number(elementMain.textContent) > 0 ){
      element.style.backgroundColor = "rgb(152, 170, 236)";
    }
  }

  onMouseLeaveLess($event: MouseEvent, form: Product){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) > 0){
      element.style.backgroundColor = "rgb(114, 130, 182)";
    }
  }

  onMouseEnterMore($event: MouseEvent, form: Product){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) >= 0 && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      element.style.backgroundColor = "rgb(114, 130, 182)";
    }
  }

  onMouseLeaveMore($event: MouseEvent, form: Product){
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
