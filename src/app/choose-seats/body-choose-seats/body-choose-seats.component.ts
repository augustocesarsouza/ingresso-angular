import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { Subscription } from 'rxjs';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { FormOfPaymentService } from '../service/form-of-payment.service';

interface FormsOfPayment {
  formName: string;
  price: string;
}

@Component({
  selector: 'app-body-choose-seats',
  templateUrl: './body-choose-seats.component.html',
  styleUrl: './body-choose-seats.component.scss'
})
export class BodyChooseSeatsComponent implements OnInit, OnDestroy {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  private seatsNumberSubscription!: Subscription;
  private witchFunctionWasClickedSubscription!: Subscription;
  arraySeats: string[] = [];
  items: number[] = [];
  formsOfPayment: FormsOfPayment[] = [];
  whatFunctionClicked = 'tickets';

  constructor(private form_of_payment_service: FormOfPaymentService ,private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService, private witch_function_was_clicked_service: WitchFunctionWasClickedService){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      let containerChooseSeatsAndOrderSummary = document.querySelector(".container-choose-seats-and-order-summary") as HTMLElement;
      let containerSeatsAndSubtitle = document.querySelector(".container-seats-and-subtitle");

      this.seatsNumberSubscription = this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
        this.items = Array.from({ length: amountSeats }, (_, i) => i);
      });

      this.witchFunctionWasClickedSubscription = this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
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
      });
    }

    if(this.objectForOrderSummary && this.objectForOrderSummary.movieId !== undefined){
      this.form_of_payment_service.getMovieIdInfo(this.objectForOrderSummary.movieId).subscribe({
        next: (data: any) => {
          this.formsOfPayment = data.data;
          console.log(this.formsOfPayment);

        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.seatsNumberSubscription) {
      this.seatsNumberSubscription.unsubscribe();
    }

    if (this.witchFunctionWasClickedSubscription) {
      this.witchFunctionWasClickedSubscription.unsubscribe();
    }
  }
}
