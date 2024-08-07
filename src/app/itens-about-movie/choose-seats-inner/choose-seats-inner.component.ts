import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { SeatsService } from '../service/seats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choose-seats-inner',
  templateUrl: './choose-seats-inner.component.html',
  styleUrl: './choose-seats-inner.component.scss'
})
export class ChooseSeatsInnerComponent implements OnInit, OnDestroy {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  stringFullOnlyDate = "";
  stringOnlyHour = "";
  arraySeatsClicked: string[] = [];
  private subscription: Subscription[] = [];
  private timeout1: any;
  ColorNumberIfWasClickedSeats = "black";
  ColorForBackgroundIfWasClickedSeats = "rgb(255, 214, 51)";

  constructor(private SeatsClickedService: SeatsService){
    if(typeof document === "undefined") return;

    this.subscription.push(this.SeatsClickedService.arraySeats$.subscribe((seats) => {
      this.arraySeatsClicked = seats;
    }));

    this.subscription.push(this.SeatsClickedService.seats$.subscribe((seats) => {
      if(seats.length <= 0) return;
      seats = seats.replace(" ", "");

      if(this.arraySeatsClicked.some((el) => el === seats)){

        this.arraySeatsClicked = this.arraySeatsClicked.filter((el) => el !== seats);
      }else {
        this.arraySeatsClicked.push(seats.replace(" ", ""));
      }

      this.SeatsClickedService.updateSeatsArray(this.arraySeatsClicked);
    }));

    clearTimeout(this.timeout1);

    this.timeout1 = setTimeout(() => {
      let allContainerSeat: NodeListOf<HTMLElement> = document.querySelectorAll(".seats");

      allContainerSeat.forEach((seat) => {

        if(!seat.firstChild) return;

        let caracterPostion = seat.firstChild.textContent;

        let containersOnlyNamber = seat.querySelector(`.container-only-number-seats`) as HTMLElement;
        let containerSeat = containersOnlyNamber.querySelectorAll(".container-seat") as NodeListOf<HTMLElement>;

        containerSeat.forEach((seatEach) => {
          let joinCaracterAndNumber = `${caracterPostion}${seatEach.textContent}`.replace(" ", "").trim();

          if(this.arraySeatsClicked.some((el) => el === joinCaracterAndNumber)){
            seatEach.style.color = this.ColorNumberIfWasClickedSeats;
            seatEach.style.backgroundColor = this.ColorForBackgroundIfWasClickedSeats;
            seatEach.style.transform = "scale(1)";
            seatEach.style.fontSize = "11px";
            seatEach.style.fontWeight = "600";
            seatEach.style.paddingLeft = "0px";
          };
        });
      })
    }, 20);

    this.SeatsClickedService.updateSeatsArray(this.arraySeatsClicked);
  }

  ngOnDestroy(): void {
    this.arraySeatsClicked = [];

    if(this.subscription.length > 0){
      this.subscription.forEach((sub) => {
        sub.unsubscribe();
      });
    }

    this.SeatsClickedService.updateSeats("");
    clearTimeout(this.timeout1);
  }

  ngOnInit(): void {
    if(typeof document === "undefined") return;

    if(this.objectForOrderSummary){
      let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
      this.stringFullOnlyDate = `${stringDayMonth[0]} ${stringDayMonth[1]}`;
      this.stringOnlyHour = stringDayMonth[2];
    }

    if(typeof document !== "undefined"){
      let containerBall: HTMLElement | null = document.querySelector(".container-ball");
      let containerSeatsOnly: HTMLElement | null = document.querySelector(".container-seats-only");
      let containerSeatsAndLoopMoreLess: HTMLElement | null = document.querySelector(".container-seats-and-loop-more-less");

      let clickeContainerAdjust = false;
      let startY: number;
      let startX: number;
      let scrollLeft: number;

      containerBall?.addEventListener("mousedown", (e: any) => {
        clickeContainerAdjust = true;
        startY = e.clientY; // posição inicial Y do mouse
        startX = e.clientX; // posição inicial X do mouse (caso você precise)
        scrollLeft = containerBall.scrollLeft; // posição inicial de rolagem
      });

      containerBall?.addEventListener("mouseup", (e) => {
        clickeContainerAdjust = false;

      });

      document.body.addEventListener("mouseup", (e) => {
        clickeContainerAdjust = false;
      });

      let valueScale = 1;

      document.body.addEventListener("mousemove", (e: any) => {
        if(!clickeContainerAdjust) return;
        e.preventDefault();

        const y = e.clientY;
        const x = e.clientX;

        if (containerBall && !containerBall.style.bottom) {
          containerBall.style.bottom = "0px";
        }

        if(containerBall){
          let currentBottom = parseFloat(containerBall.style.bottom);

          if (y > startY) {// 8 passos
            if(currentBottom > 0){
              currentBottom = currentBottom - 10;
              containerBall.style.bottom = `${currentBottom}px`;
            }
          } else if (y < startY) {
            if(currentBottom <= 70){ //80px
              currentBottom = currentBottom + 10;
              containerBall.style.bottom = `${currentBottom}px`;
            }
          }

          if(currentBottom === 0){
            valueScale = 1;
          }else if(currentBottom === 10){
            valueScale = 1.2;
          }else if(currentBottom === 20){
            valueScale = 1.4;
          }else if(currentBottom === 30){
            valueScale = 1.6;
          }else if(currentBottom === 40){
            valueScale = 1.8;
          }else if(currentBottom === 50){
            valueScale = 2;
          }else if(currentBottom === 60){
            valueScale = 2.2;
          }else if(currentBottom === 70){
            valueScale = 2.4;
          }else if(currentBottom === 80){
            valueScale = 2.6;
          }

          if(containerSeatsOnly){
            containerSeatsOnly.style.transform = `translate(0px, 0px) scale(${valueScale})`;
          }
        }

        startY = y;
        startX = x;
      });

      let originX = 0;
      let originY = 0;

      if(containerSeatsAndLoopMoreLess){
        let containerSeatsAndLoopMoreLessEnter = false;
        containerSeatsAndLoopMoreLess.addEventListener("mouseenter", () => {
          containerSeatsAndLoopMoreLessEnter = true;
        });

        containerSeatsAndLoopMoreLess.addEventListener("mouseleave", () => {
          containerSeatsAndLoopMoreLessEnter = false;
        });

        function preventScroll(event: any) {
          if (containerSeatsAndLoopMoreLessEnter) {
            event.preventDefault();
          }
        }

        window.addEventListener("scroll", preventScroll, { passive: false });
        window.addEventListener("wheel", preventScroll, { passive: false });
        window.addEventListener("touchmove", preventScroll, { passive: false });

        containerSeatsAndLoopMoreLess.addEventListener("wheel", (e: WheelEvent) => {
          if(containerSeatsOnly){
            const rect = containerSeatsOnly.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const scaleAmount = 0.2;
            let newScale = valueScale;

            if(containerBall){
              let currentBottom = parseFloat(containerBall.style.bottom);

              if (e.deltaY > 0) {
                // Rolando para baixo
                if(currentBottom > 0){
                  currentBottom = currentBottom - 10;
                  containerBall.style.bottom = `${currentBottom}px`;
                  newScale = Math.max(1, valueScale - scaleAmount);

                  const scaleChange = newScale / valueScale;
                  originX = ((mouseX - originX) * scaleChange) / scaleChange;
                  originY = ((mouseY - originY) * scaleChange) / scaleChange;

                  valueScale = newScale;
                }
              } else if (e.deltaY < 0) {
                // Rolando para cima
                if(currentBottom <= 70){ //80px
                  currentBottom = currentBottom + 10;
                  containerBall.style.bottom = `${currentBottom}px`;
                  newScale = Math.min(3, valueScale + scaleAmount);

                  const scaleChange = newScale / valueScale;
                  originX = ((mouseX - originX) * scaleChange) / scaleChange;
                  originY = ((mouseY - originY) * scaleChange) / scaleChange;

                  valueScale = newScale;
                }
              }

              if (containerBall && !containerBall.style.bottom) {
                containerBall.style.bottom = "0px";
              }

              if(currentBottom === 0){
                valueScale = 1;
                originX = 0;
                originY = 0;
              }else if(currentBottom === 10){
                valueScale = 1.2;
              }else if(currentBottom === 20){
                valueScale = 1.4;
              }else if(currentBottom === 30){
                valueScale = 1.6;
              }else if(currentBottom === 40){
                valueScale = 1.8;
              }else if(currentBottom === 50){
                valueScale = 2;
              }else if(currentBottom === 60){
                valueScale = 2.2;
              }else if(currentBottom === 70){
                valueScale = 2.4;
              }else if(currentBottom === 80){
                valueScale = 2.6;
              }

              if(containerSeatsOnly){
                // containerSeatsOnly.style.transform = `translate(-${originX}px, -${originY}px) scale(${valueScale})`;
                containerSeatsOnly.style.transformOrigin = `${originX}px ${originY}px`;
                containerSeatsOnly.style.transform = `scale(${valueScale})`;
              }
            }
          }
        }, { passive: true });
      }
    }
  }
}
