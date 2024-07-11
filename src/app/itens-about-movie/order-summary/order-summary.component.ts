import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { SeatsService } from '../service/seats.service';
import { Subscription } from 'rxjs';
import { TicketsClickedForTheUserPaymentMethodService } from '../service/tickets-clicked-for-the-user-payment-method.service';
import { FormsOfPaymentClicked } from '../body-choose-seats/body-choose-seats.component';
import { BomboniereService } from '../service-bomboniere/bomboniere.service';
import { ObjProductClicked } from '../bomboniere/bomboniere.component';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  listOfFormPaymentClicked: FormsOfPaymentClicked[] = [];
  stringFullOnlyDate = "";
  stringOnlyHour = "";
  private seatsSubscription: Subscription[] = [];
  arraySeats: string[] = [];
  stringSeats = "";
  totalPriceTickets = "0,00";
  listProduct: ObjProductClicked[] = [];

  constructor(private seats_service: SeatsService, private bomboniere_service: BomboniereService,
    private tickets_clicked_for_the_user_payment_method_service: TicketsClickedForTheUserPaymentMethodService){
  }

  ngOnInit(): void {
    this.seatsSubscription.push(this.tickets_clicked_for_the_user_payment_method_service.numberOfTheTicketsClicked$.subscribe((list) => {
      if(list.length <= 0){
        this.listOfFormPaymentClicked = list;
        this.totalPriceTickets = "0,00";
        return;
      }

      this.listOfFormPaymentClicked = list;

      let priceTotal = 0.00;
      this.listOfFormPaymentClicked.forEach((el) => {
        if(el.quantityClicked > 1){
          priceTotal = el.price * el.quantityClicked;
        }else {
          priceTotal += el.price;
        }
      });
      this.totalPriceTickets = priceTotal.toFixed(2).replace(".", ",");
    }));

    this.seatsSubscription.push(this.bomboniere_service.numberOfTheProductClicked$.subscribe((listProduct) => {
      this.listProduct = listProduct;
      // console.log(this.listProduct);

    }));

    if(this.objectForOrderSummary){
      let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
      this.stringFullOnlyDate = `${stringDayMonth[0]} ${stringDayMonth[1]}`;
      this.stringOnlyHour = stringDayMonth[2];
    }

    this.seatsSubscription.push(this.seats_service.seats$.subscribe((seatsElClicked) => {
      if(seatsElClicked.length <= 0)return;

      if(this.arraySeats[0] === ""){
        this.arraySeats.shift();
      }

      if(this.arraySeats.some((el) => el === seatsElClicked)){
        this.arraySeats = this.arraySeats.filter((el) => el !== seatsElClicked);
      }else {
        if(this.arraySeats.length <= 8){
          this.arraySeats.push(seatsElClicked);
        }
      }

      if(this.arraySeats.length <= 1){
        this.stringSeats = this.arraySeats[0];
      }else {
        this.stringSeats = "";
        for (let i = 0; i < this.arraySeats.length; i++) {
          this.stringSeats += this.arraySeats[i];

          if(this.arraySeats.length > i + 1){
            this.stringSeats += ", "
          }
        }
      }

      if(this.arraySeats.length === 0){
        this.stringSeats = "";
      }
    }));
  }

  titleMovie(title: string): string {
    return title.substring(0, 18) + "...";
  }

  ngOnDestroy() {
    if (this.seatsSubscription) {
      this.seatsSubscription.forEach((el) => {
        el.unsubscribe();
      })
    }
  }
}
