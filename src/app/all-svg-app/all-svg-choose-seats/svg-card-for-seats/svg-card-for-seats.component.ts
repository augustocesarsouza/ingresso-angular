import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-card-for-seats',
  templateUrl: './svg-card-for-seats.component.html',
  styleUrl: './svg-card-for-seats.component.scss'
})
export class SvgCardForSeatsComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
