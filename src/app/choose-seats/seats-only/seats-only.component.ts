import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats-only',
  templateUrl: './seats-only.component.html',
  styleUrl: './seats-only.component.scss'
})
export class SeatsOnlyComponent implements OnInit, OnDestroy {
  @Input() nameForSeats: string = '';
  seats: number[] = Array.from({ length: 34 }, (_, i) => i + 1);
  private timeoutId: any;

  constructor(){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.timeoutId = setTimeout(() => {
      if(typeof document !== 'undefined'){
        let containerSeat = document.querySelector(`.container-only-number-seats-${this.nameForSeats}`);
        if(containerSeat){
          let allContainerSeat: NodeListOf<Element> = containerSeat.querySelectorAll(".container-seat");
          console.log(allContainerSeat); // pegar amanha e colocar tipo receber "Input" que reveba o tanto que eu quero remover apagar "seats"
        }
      }
    }, 10);

  }

  ngOnDestroy(): void {
    if(this.timeoutId){
      clearTimeout(this.timeoutId);
    }
  }
}
