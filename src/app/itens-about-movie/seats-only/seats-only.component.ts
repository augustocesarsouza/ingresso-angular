import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SeatsService } from '../service/seats.service';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';

@Component({
  selector: 'app-seats-only',
  templateUrl: './seats-only.component.html',
  styleUrl: './seats-only.component.scss'
})
export class SeatsOnlyComponent implements OnInit, OnDestroy {
  @Input() nameForSeats: string = '';
  @Input() seatsThatWillStandOutside = 0;
  arraySeats: string[] = [];
  colorForNumberSeats = "rgb(152, 170, 236)";
  colorForBackgroundNumberSeats = "rgb(152, 170, 236)";
  ColorNumberIfWasClickedSeats = "black";
  ColorForBackgroundIfWasClickedSeats = "rgb(255, 214, 51)";
  seats: number[] = Array.from({ length: 34 }, (_, i) => i + 1);
  private timeoutId: any;
  private timeoutIdContainerSeat: any;
  numberOfTheClickSeats = 0;
  seatsClicked: string[] = [];

  constructor(private seats_service: SeatsService, private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService){
  }

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => {
      if(typeof document !== 'undefined'){
        let containerSeat = document.querySelector(`.container-only-number-seats-${this.nameForSeats}`);

        if(containerSeat){
          let allContainerSeat: NodeListOf<HTMLElement> = containerSeat.querySelectorAll(".container-seat");

          allContainerSeat.forEach((el, index) => {
            if(index >= this.seatsThatWillStandOutside && index < allContainerSeat.length - this.seatsThatWillStandOutside){
              el.addEventListener("click", () => this.eventClickContainerSeat(el));
              el.style.color = this.colorForNumberSeats;
              el.style.backgroundColor = this.colorForBackgroundNumberSeats;
              el.style.marginRight = "3px";
            }
          })

          for (let i = 0; i < this.seatsThatWillStandOutside; i++) {
            const element = allContainerSeat[i];
            element.style.backgroundColor = "rgb(33, 38, 45)";
            element.style.color = "rgb(33, 38, 45)";
            element.style.userSelect = "none";
            element.style.cursor = "auto";
            // element.style.marginRight = "0px";
          }

          let lengthLastFour = allContainerSeat.length - this.seatsThatWillStandOutside;

          for (let i = lengthLastFour; i < allContainerSeat.length; i++) {
            const element = allContainerSeat[i];
            element.style.backgroundColor = "rgb(33, 38, 45)";
            element.style.color = "rgb(33, 38, 45)";
            element.style.userSelect = "none";
            element.style.cursor = "auto";
            // element.style.marginRight = "0px";
          }

          // this.SeatsClickedService.currentSeatsClicked$.subscribe((seats) => {
          //   console.log(seats);

          // })
        }
      }
    }, 10);
  }

  eventClickContainerSeat(el: HTMLElement){
    if(this.timeoutIdContainerSeat){
      clearTimeout(this.timeoutIdContainerSeat);
    }

    this.numberOfTheClickSeats = this.number_of_the_seats_clicked_service.currentSeats;

    let nameForSeatsClean = this.nameForSeats?.replace(/\s+/g, '');
    let textContentClean = el.textContent?.replace(/\s+/g, '');
    let seatsJoin = `${nameForSeatsClean} ${textContentClean}`;

    if(this.numberOfTheClickSeats < 8 && el.style.color === this.colorForNumberSeats){
      this.numberOfTheClickSeats += 1;

      this.seats_service.updateSeats(seatsJoin);

      el.style.color = this.ColorNumberIfWasClickedSeats;
      el.style.backgroundColor = this.ColorForBackgroundIfWasClickedSeats;
      el.style.transform = "scale(1.6)";
      el.style.fontSize = "10px";
      el.style.fontWeight = "400";
      el.style.paddingLeft = "0px";
      // transform: scale(1.1);

      this.timeoutIdContainerSeat = setTimeout(() => {
        el.style.transform = "scale(1)";
        el.style.fontSize = "11px";
        el.style.fontWeight = "600";
        el.style.paddingLeft = "0px";
      }, 100);

      // this.seatsClicked.push(seatsJoin.replace(" ", ""));
    }else {
      if(this.numberOfTheClickSeats > 0 && el.style.backgroundColor === this.ColorForBackgroundIfWasClickedSeats){
        this.numberOfTheClickSeats -= 1;

        this.seats_service.updateSeats(seatsJoin);
      }

      el.style.color = this.colorForNumberSeats;
      el.style.backgroundColor = this.colorForBackgroundNumberSeats;

      clearTimeout(this.timeoutIdContainerSeat);

      this.seatsClicked = this.seatsClicked.filter((el) => el !== seatsJoin.replace(" ", ""));
    }

    // this.SeatsClickedService.setArraySeats(this.seatsClicked); // rever isso está sendo varias instancia tem que ser so uma para todos os assentos
    // talvez tenha que colocar  aqui 'ChooseSeatsInnerComponent'

    this.number_of_the_seats_clicked_service.updateNumberOfTheClickSeats(this.numberOfTheClickSeats);
  }

  ngOnDestroy(): void {
    if(this.timeoutId){
      clearTimeout(this.timeoutId);
    }

    if(this.timeoutIdContainerSeat){
      clearTimeout(this.timeoutIdContainerSeat);
    }
  }
}
