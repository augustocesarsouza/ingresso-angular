import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { Subscription } from 'rxjs';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';

@Component({
  selector: 'app-which-position-choose',
  templateUrl: './which-position-choose.component.html',
  styleUrl: './which-position-choose.component.scss'
})
export class WhichPositionChooseComponent implements OnInit, OnDestroy {
  private seatsNumberSubscription!: Subscription;
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

  constructor(private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService, private witch_function_was_clicked_service: WitchFunctionWasClickedService){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      let containerSvgChooseSeats = document.querySelector(".container-svg-choose-seats") as HTMLElement;
      let containerSvgTickets = document.querySelector(".container-svg-tickets") as HTMLElement;
      let containerLineWhite = document.querySelector(".container-line-white") as HTMLElement;

      let numberSeatsClicked = 0;
      let jaClicouTickets = false;
      let alreadyClickedOnceTickets = false;

      this.seatsNumberSubscription = this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
        numberSeatsClicked = amountSeats;

        if(amountSeats > 0 && !alreadyClickedOnceTickets){
          this.fillTickets = "rgb(152, 170, 236)";
          this.borderTickets = "1px solid rgb(152, 170, 236)";
        }else {
          if(!alreadyClickedOnceTickets){

            this.fillTickets = "rgb(52 60 70)";
            this.borderTickets = "1px solid rgb(52, 60, 70)";
          }
        }
      });

      containerSvgTickets.addEventListener("click", () => {
        if(numberSeatsClicked > 0){
          jaClicouTickets = true;
          alreadyClickedOnceTickets = true;
          this.witch_function_was_clicked_service.updateWhatWasClicked("tickets");

          containerLineWhite.style.borderColor = "rgb(152, 170, 236)";

          containerSvgTickets.style.display = "flex";
          containerSvgTickets.style.backgroundColor = "rgb(49 85 232)";
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
        }
      });

      containerSvgChooseSeats.addEventListener("click", () => {
        if(jaClicouTickets){
          jaClicouTickets = false;
          alreadyClickedOnceTickets = false;
          this.witch_function_was_clicked_service.updateWhatWasClicked("seats");

          containerLineWhite.style.borderColor = "rgb(52, 60, 70)";

          containerSvgTickets.style.display = "flex";
          containerSvgTickets.style.backgroundColor = "transparent";
          containerSvgTickets.style.padding = "0px";
          containerSvgTickets.style.borderRadius = "50%";

          this.fillTickets = "rgb(152, 170, 236)";
          this.borderTickets = "1px solid rgb(152, 170, 236)";
          this.paddingTickets = "4px";
          this.widthHeightTickets = "27px";
          this.borderRadiusTickets = "50%";

          containerSvgChooseSeats.style.display = "flex";
          containerSvgChooseSeats.style.backgroundColor = "rgb(49 85 232)";
          containerSvgChooseSeats.style.padding = "5px";
          containerSvgChooseSeats.style.borderRadius = "50%";

          this.fillSeats = "#fff";
          this.borderSeats = "none";
          this.paddingSeats = "0px";;
          this.widthHeightSeats = "24px";
          this.borderRadiusSeats = "none";
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.seatsNumberSubscription) {
      this.seatsNumberSubscription.unsubscribe();
    }
  }
}
