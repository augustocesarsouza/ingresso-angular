import { Component, Input, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { Subscription } from 'rxjs';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { Router } from '@angular/router';
import { OrderSummaryService } from '../service/order-summary.service';
import { PositionType } from '../enum/app.enums-type-of-itens';

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
      this.subscription.push(this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
        if(whatFunctionClicked.length <= 0) return;

        this.whatFunctionClicked = whatFunctionClicked;
        this.redirectUser(whatFunctionClicked);
      }));

      this.redirectUser(this.whatFunctionClicked);
    }
  }

  redirectUser(whatFunctionClicked: string){
    if(typeof document !== 'undefined'){
      let containerChooseSeatsAndOrderSummary = document.querySelector(".container-itens-about-movie-and-order-summary") as HTMLElement;

      if(whatFunctionClicked === PositionType.Tickets){
        containerChooseSeatsAndOrderSummary.style.height = "100%";
        this.router.navigate(['/itens-about-movie/tickets'], { state: { objectForOrderSummary: this.objectForOrderSummary } });
      }

      if(whatFunctionClicked === PositionType.Seats){
        if(containerChooseSeatsAndOrderSummary){
          this.router.navigate(['/itens-about-movie/seats'], { state: { objectForOrderSummary: this.objectForOrderSummary } });
        }

        containerChooseSeatsAndOrderSummary.style.height = "1051px";
      }

      if(whatFunctionClicked === PositionType.Popcorn){
        if(containerChooseSeatsAndOrderSummary){
          this.router.navigate(['/itens-about-movie/bomboniere']);
        }
      }

      if(whatFunctionClicked === PositionType.Payment){
        if(containerChooseSeatsAndOrderSummary){
          this.router.navigate(['/itens-about-movie/payment']);
        }
      }
    }

  }
}
