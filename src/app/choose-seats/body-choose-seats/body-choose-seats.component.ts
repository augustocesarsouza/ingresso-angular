import { Component, Input, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { Subscription } from 'rxjs';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';

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
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  private subscription: Subscription[] = [];
  whatFunctionClicked = 'seats';
  containerLessAndMore!: NodeListOf<HTMLElement>;
  listOfFormPaymentClicked: FormsOfPaymentClicked[] = [];

  constructor(private witch_function_was_clicked_service: WitchFunctionWasClickedService){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      let containerChooseSeatsAndOrderSummary = document.querySelector(".container-choose-seats-and-order-summary") as HTMLElement;
      let containerSeatsAndSubtitle = document.querySelector(".container-seats-and-subtitle");

      this.subscription.push(this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
        if(whatFunctionClicked.length <= 0) return;

        this.whatFunctionClicked = whatFunctionClicked;

        if(whatFunctionClicked === "tickets"){
          containerSeatsAndSubtitle?.remove();
          containerChooseSeatsAndOrderSummary.style.height = "100%";
        }

        if(whatFunctionClicked === "seats"){
          if(containerSeatsAndSubtitle && containerChooseSeatsAndOrderSummary){
            containerChooseSeatsAndOrderSummary.insertBefore(containerSeatsAndSubtitle, containerChooseSeatsAndOrderSummary.firstChild);
          }

          containerChooseSeatsAndOrderSummary.style.height = "1051px";
        }
      }));
    }
  }
}
