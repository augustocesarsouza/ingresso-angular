import { Component, Input, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';

@Component({
  selector: 'app-body-choose-seats',
  templateUrl: './body-choose-seats.component.html',
  styleUrl: './body-choose-seats.component.scss'
})
export class BodyChooseSeatsComponent implements OnInit {
  @Input() objectForOrderSummary!: ObjectForOrderSummary;
  stringFullOnlyDate = "";
  stringOnlyHour = "";
  seats: number[] = Array.from({ length: 34 }, (_, i) => i + 1);

  constructor(){
  }

  ngOnInit(): void {
    if(this.objectForOrderSummary){
      let stringDayMonth = this.objectForOrderSummary.dayMonthAndDayWeek.split(" ");
      console.log(this.objectForOrderSummary);
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
        containerSeatsAndLoopMoreLess.addEventListener("wheel", (e: WheelEvent) => {
          if(containerSeatsOnly){
            const rect = containerSeatsOnly.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const scaleAmount = 0.2;

            if(containerBall){
              let currentBottom = parseFloat(containerBall.style.bottom);

              if (e.deltaY > 0) {
                // console.log("Rolando para baixo");
                if(currentBottom > 0){
                  currentBottom = currentBottom - 10;
                  containerBall.style.bottom = `${currentBottom}px`;
                  // originX -= (mouseX / rect.width) * 100;
                  // originY -= (mouseY / rect.height) * 100;
                  valueScale = Math.max(1, valueScale - scaleAmount);
                }
              } else if (e.deltaY < 0) {
                // console.log("Rolando para cima");
                if(currentBottom <= 70){ //80px
                  currentBottom = currentBottom + 10;
                  containerBall.style.bottom = `${currentBottom}px`;
                  // originX += (mouseX / rect.width) * 100;
                  // originY += (mouseY / rect.height) * 100;
                  valueScale = Math.min(3, valueScale + scaleAmount);
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

              const newOriginX = mouseX / rect.width * 100;
              const newOriginY = mouseY / rect.height * 100;

              originX = (newOriginX - (newOriginX - originX) / valueScale) * (valueScale - 1);
              originY = (newOriginY - (newOriginY - originY) / valueScale) * (valueScale - 1);

              if(containerSeatsOnly){
                containerSeatsOnly.style.transform = `translate(-${originX}px, -${originY}px) scale(${valueScale})`;
              }
            }
          }
        });
      }

    }
  }
}
