import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { Subscription } from 'rxjs';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { NumberOfTheTicketsClickedService } from '../service/number-of-the-tickets-clicked.service';
import { PositionType } from '../enum/app.enums-type-of-itens';
import { TypeOfThePaymentService } from '../service/type-of-the-payment.service';

@Component({
  selector: 'app-which-position-choose',
  templateUrl: './which-position-choose.component.html',
  styleUrl: './which-position-choose.component.scss'
})
export class WhichPositionChooseComponent implements OnInit, OnDestroy {
  private SubscriptionAll: Subscription[] = [];
  ticketsClicked = 0;
  quantityAlreadyBeenClickedLessMore = 0;
  numberSeatsClicked = 999;
  whatFunctionWasClickedByUser = "seats";
  fillTickets = "rgb(52 60 70)";
  borderTickets = "1px solid rgb(52, 60, 70)";
  paddingTickets = "4px";
  widthHeightTickets = "27px";
  borderRadiusTickets = "50%";

  fillSeats = "#fff";
  borderSeats = "none";
  paddingSeats = "none";
  widthHeightSeats = "24px";
  borderRadiusSeats = "none";

  fillBomboniere = "rgb(52 60 70)";
  borderBomboniere = "1px solid rgb(52, 60, 70)";
  paddingBomboniere = "4px";
  widthHeightBomboniere = "27px";
  borderRadiusBomboniere = "50%";

  fillPayment = "rgb(52 60 70)";
  borderPayment = "1px solid rgb(52, 60, 70)";
  paddingPayment = "4px";
  widthHeightPayment = "27px";
  borderRadiusPayment = "50%";

  seats = PositionType.Seats;
  tickets = PositionType.Tickets;
  bomboniere = PositionType.Popcorn;
  payment = PositionType.Payment;

  constructor(private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService, private witch_function_was_clicked_service: WitchFunctionWasClickedService,
    private number_of_the_tickets_clicked_service: NumberOfTheTicketsClickedService, private type_of_the_payment_service: TypeOfThePaymentService
  ){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      let containerSvgChooseSeats = document.querySelector(".container-svg-itens-about-movie") as HTMLElement;
      let containerSvgTickets = document.querySelector(".container-svg-tickets") as HTMLElement;
      let containerLineWhiteAll = document.querySelectorAll(".container-line-white") as NodeListOf<HTMLElement>;
      let containerSvgBomboniere = document.querySelector(".container-svg-popcorn") as HTMLElement;
      let containerSvgCard = document.querySelector(".container-svg-card") as HTMLElement;

      // let numberSeatsClicked = 0;
      let jaClicouTickets = false;
      let alreadyClickedOnceTickets = false;

      this.SubscriptionAll.push(this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
        if(amountSeats <= 0) return;
        this.numberSeatsClicked = amountSeats;

        if(amountSeats > 0 && !alreadyClickedOnceTickets){
          this.fillTickets = "rgb(152, 170, 236)";
          this.borderTickets = "1px solid rgb(152, 170, 236)";
        }else {
          if(!alreadyClickedOnceTickets){

            this.fillTickets = "rgb(52 60 70)";
            this.borderTickets = "1px solid rgb(52, 60, 70)";
          }
        }
      }));

      this.SubscriptionAll.push(this.type_of_the_payment_service.quantityAlreadyBeenClickedLessMore$.subscribe((number) => {
        this.quantityAlreadyBeenClickedLessMore = number;
      }));

      this.SubscriptionAll.push(
        this.number_of_the_tickets_clicked_service.numberOfTheClickTickets$.subscribe((ticketsClicked) => {
          this.ticketsClicked = ticketsClicked.length;

          if(this.quantityAlreadyBeenClickedLessMore >= this.numberSeatsClicked){
            this.fillBomboniere = "rgb(152, 170, 236)";
            this.borderBomboniere = "1px solid rgb(152, 170, 236)";

            this.fillPayment = "rgb(152, 170, 236)";
            this.borderPayment = "1px solid rgb(152, 170, 236)";
          }else {
            this.fillBomboniere = "rgb(52 60 70)";
            this.borderBomboniere = "1px solid rgb(52, 60, 70)";

            this.fillPayment = "rgb(52 60 70)";
            this.borderPayment = "1px solid rgb(52, 60, 70)";
          };
        })
      );

      containerSvgChooseSeats.addEventListener("click", () => {
        if(jaClicouTickets){
          jaClicouTickets = false;
          alreadyClickedOnceTickets = false;
          this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Seats);
          // this.whatFunctionWasClickedByUser = "seats";
          this.whatFunctionWasClickedByUser = PositionType.Seats;

          containerLineWhiteAll[0].style.borderColor = "rgb(52, 60, 70)";
          containerLineWhiteAll[1].style.borderColor = "rgb(52, 60, 70)";
          containerLineWhiteAll[2].style.borderColor = "rgb(52, 60, 70)";

          this.retiraCorTickets(containerSvgTickets);

          containerSvgChooseSeats.style.display = "flex";
          containerSvgChooseSeats.style.backgroundColor = "rgb(49, 85, 232)";
          containerSvgChooseSeats.style.padding = "5px";
          containerSvgChooseSeats.style.borderRadius = "50%";

          this.fillSeats = "#fff";
          this.borderSeats = "none";
          this.paddingSeats = "0px";;
          this.widthHeightSeats = "24px";
          this.borderRadiusSeats = "none";

          containerSvgBomboniere.style.display = "flex";
          containerSvgBomboniere.style.backgroundColor = "transparent";
          containerSvgBomboniere.style.padding = "0px";
          containerSvgBomboniere.style.borderRadius = "50%";

          this.fillBomboniere = "rgb(52, 60, 70)";
          this.borderBomboniere = "1px solid rgb(52, 60, 70)";
          this.paddingBomboniere   = "4px";
          this.widthHeightBomboniere   = "27px";
          this.borderRadiusBomboniere  = "50%";

          containerSvgCard.style.display = "flex";
          containerSvgCard.style.backgroundColor = "transparent";
          containerSvgCard.style.padding = "0px";
          containerSvgCard.style.borderRadius = "50%";

          this.fillPayment = "rgb(52, 60, 70)";
          this.borderPayment = "1px solid rgb(52, 60, 70)";
          this.paddingPayment = "4px";
          this.widthHeightPayment = "27px";
          this.borderRadiusPayment = "50%";

          this.ticketsClicked = 0;
        }
      });

      containerSvgTickets.addEventListener("click", () => {
        // console.log(this.numberSeatsClicked);

        if(this.numberSeatsClicked > 0){
          jaClicouTickets = true;
          alreadyClickedOnceTickets = true;
          this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Tickets);
          // this.whatFunctionWasClickedByUser = "tickets";
          this.whatFunctionWasClickedByUser = PositionType.Tickets;

          containerLineWhiteAll[0].style.borderColor = "rgb(152, 170, 236)";
          containerLineWhiteAll[1].style.borderColor = "rgb(52, 60, 70)";
          containerLineWhiteAll[2].style.borderColor = "rgb(52, 60, 70)";

          containerSvgTickets.style.display = "flex";
          containerSvgTickets.style.backgroundColor = "rgb(49, 85, 232)";
          containerSvgTickets.style.padding = "5px";
          containerSvgTickets.style.borderRadius = "50%";

          this.fillTickets = "#fff";
          this.borderTickets = "none";
          this.paddingTickets = "0px";
          this.widthHeightTickets = "24px";
          this.borderRadiusTickets = "none";

          containerSvgChooseSeats.style.display = "flex";
          containerSvgChooseSeats.style.backgroundColor = "transparent";
          containerSvgChooseSeats.style.padding = "0px";
          containerSvgChooseSeats.style.borderRadius = "50%";

          this.fillSeats = "rgb(152, 170, 236)";
          this.borderSeats = "1px solid rgb(152, 170, 236)";
          this.paddingSeats = "4px";
          this.widthHeightSeats = "27px";
          this.borderRadiusSeats = "50%";

          if(this.ticketsClicked > 0){
            this.retiraCorBomboniere(containerSvgBomboniere);

            this.retiraCorPayment(containerSvgCard);

            this.retiraCorBomboniere(containerSvgBomboniere);

            containerLineWhiteAll[1].style.borderColor = "rgb(52, 60, 70)";
          }

        }
      });

      containerSvgBomboniere.addEventListener("click", () => {
        if(this.quantityAlreadyBeenClickedLessMore >= this.numberSeatsClicked){
          jaClicouTickets = true;
          alreadyClickedOnceTickets = true;

          this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Popcorn);
          // this.witch_function_was_clicked_service.updateWhatWasClicked("pipoca");
          this.whatFunctionWasClickedByUser = PositionType.Popcorn;

          containerLineWhiteAll[1].style.borderColor = "rgb(152, 170, 236)";
          containerLineWhiteAll[2].style.borderColor = "rgb(52, 60, 70)";

          containerSvgBomboniere.style.display = "flex";
          containerSvgBomboniere.style.backgroundColor = "rgb(49, 85, 232)";
          containerSvgBomboniere.style.padding = "5px";
          containerSvgBomboniere.style.borderRadius = "50%";

          this.fillBomboniere = "#fff";
          this.borderBomboniere = "none";
          this.paddingBomboniere = "0px";
          this.widthHeightBomboniere = "24px";
          this.borderRadiusBomboniere = "none";

          this.retiraCorTickets(containerSvgTickets);

          this.retiraCorPayment(containerSvgCard);
        }
      });

      containerSvgCard.addEventListener("click", () => {
        if(this.quantityAlreadyBeenClickedLessMore >= this.numberSeatsClicked){
          this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Payment);
          this.whatFunctionWasClickedByUser = PositionType.Payment;

          containerLineWhiteAll[2].style.borderColor = "rgb(152, 170, 236)";
          containerLineWhiteAll[1].style.borderColor = "rgb(152, 170, 236)";

          containerSvgCard.style.display = "flex";
          containerSvgCard.style.backgroundColor = "rgb(49, 85, 232)";
          containerSvgCard.style.padding = "5px";
          containerSvgCard.style.borderRadius = "50%";

          this.fillPayment = "#fff";
          this.borderPayment = "none";
          this.paddingPayment = "0px";
          this.widthHeightPayment = "24px";
          this.borderRadiusPayment = "none";

          // this.retiraCorPayment(containerSvgCard);

          this.retiraCorTickets(containerSvgTickets);

          this.retiraCorBomboniere(containerSvgBomboniere);
        }
      });
    }
  }

  retiraCorTickets(containerSvgTickets: HTMLElement){
    containerSvgTickets.style.display = "flex";
    containerSvgTickets.style.backgroundColor = "transparent";
    containerSvgTickets.style.padding = "0px";
    containerSvgTickets.style.borderRadius = "50%";

    this.fillTickets = "rgb(152, 170, 236)";
    this.borderTickets = "1px solid rgb(152, 170, 236)";
    this.paddingTickets = "4px";
    this.widthHeightTickets = "27px";
    this.borderRadiusTickets = "50%";
  }

  retiraCorBomboniere(containerSvgBomboniere: HTMLElement){
    containerSvgBomboniere.style.display = "flex";
    containerSvgBomboniere.style.backgroundColor = "transparent";
    containerSvgBomboniere.style.padding = "0px";
    containerSvgBomboniere.style.borderRadius = "50%";

    this.fillBomboniere = "rgb(152, 170, 236)";
    this.borderBomboniere = "1px solid rgb(152, 170, 236)";
    this.paddingBomboniere = "4px";
    this.widthHeightBomboniere = "27px";
    this.borderRadiusBomboniere = "50%";
  }

  retiraCorPayment(containerSvgCard: HTMLElement){
    containerSvgCard.style.display = "flex";
    containerSvgCard.style.backgroundColor = "transparent";
    containerSvgCard.style.padding = "0px";
    containerSvgCard.style.borderRadius = "50%";

    this.fillPayment = "rgb(152, 170, 236)";
    this.borderPayment = "1px solid rgb(152, 170, 236)";
    this.paddingPayment = "4px";
    this.widthHeightPayment = "27px";
    this.borderRadiusPayment = "50%";
  }

  ngOnDestroy() {
    if (this.SubscriptionAll.length > 0) {
      this.SubscriptionAll.forEach((el) => {
        el.unsubscribe();
      })
    }
  }
}
