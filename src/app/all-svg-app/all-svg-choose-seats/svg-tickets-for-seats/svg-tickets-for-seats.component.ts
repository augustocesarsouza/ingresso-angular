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
  @Input() border: string = '1px solid rgb(52, 60, 70)';
  @Input() borderRadius: string = '50%';
  @Input() padding: string = '4px';

  constructor(){
  }
}
