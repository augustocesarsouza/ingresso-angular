import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-tickets-for-seats',
  templateUrl: './svg-tickets-for-seats.component.html',
  styleUrl: './svg-tickets-for-seats.component.scss'
})
export class SvgTicketsForSeatsComponent {
  @Input() width: string = '17px';
  @Input() height: string = '17px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
