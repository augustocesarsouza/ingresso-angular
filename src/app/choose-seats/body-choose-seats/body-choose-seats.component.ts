import { Component, Input, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { Subscription } from 'rxjs';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { Router } from '@angular/router';
import { OrderSummaryService } from '../service/order-summary.service';

export interface FormsOfPaymentClicked {
  formName: string;
  price: number;
  priceTotal: string;
  quantityClicked: number;
}

@Component({
  selector: 'app-body-choose-seats',
  templateUrl: './body-choose-seats.component.html',
  styleUrl: './body-choose-seats.component.scss'
})
export class BodyChooseSeatsComponent implements OnInit {
  objectForOrderSummary!: ObjectForOrderSummary;
  private subscription: Subscription[] = [];
  whatFunctionClicked = 'seats';
  containerLessAndMore!: NodeListOf<HTMLElement>;
  listOfFormPaymentClicked: FormsOfPaymentClicked[] = [];

  constructor(private witch_function_was_clicked_service: WitchFunctionWasClickedService, order_summary_service: OrderSummaryService, private router: Router){
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras?.state){
      let state: any = navigation.extras.state;
      this.objectForOrderSummary = state.objectForOrderSummary;
      order_summary_service.setOrderSummary(this.objectForOrderSummary);
    }
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      let containerChooseSeatsAndOrderSummary = document.querySelector(".container-choose-seats-and-order-summary") as HTMLElement;
      // let containerSeatsAndSubtitle = document.querySelector(".container-seats-and-subtitle");

      this.subscription.push(this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
        if(whatFunctionClicked.length <= 0) return;

        this.whatFunctionClicked = whatFunctionClicked;

        if(whatFunctionClicked === "tickets"){
          // containerSeatsAndSubtitle?.remove();
          containerChooseSeatsAndOrderSummary.style.height = "100%";
          this.router.navigate(['/itens-about-movie/tickets'], { state: { objectForOrderSummary: this.objectForOrderSummary } });

        }

        if(whatFunctionClicked === "seats"){
          if(containerChooseSeatsAndOrderSummary){
            // containerChooseSeatsAndOrderSummary.insertBefore(containerSeatsAndSubtitle, containerChooseSeatsAndOrderSummary.firstChild);
            this.router.navigate(['/itens-about-movie/seats'], { state: { objectForOrderSummary: this.objectForOrderSummary } });
          }

          containerChooseSeatsAndOrderSummary.style.height = "1051px";
        }
      }));
    }
  }

  // onClickWhichDivWasClicked(){
  //   this.numberDiv = numberDiv;

  //   if (numberDiv === 1) {
  //     this.router.navigate(['/my-account/my-orders-2']);
  //   } else if (numberDiv === 3) {
  //     this.router.navigate(['/my-account/personal-data']);
  //   } else if (numberDiv === 4) {
  //     this.router.navigate(['/my-account/payment-methods']);
  //     this.containerAllOptionAndYoursOrders.style.width = "90%";
  //   }
  // }
}
