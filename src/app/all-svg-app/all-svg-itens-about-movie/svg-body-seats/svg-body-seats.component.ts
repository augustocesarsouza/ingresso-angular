import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-body-seats',
  templateUrl: './svg-body-seats.component.html',
  styleUrl: './svg-body-seats.component.scss'
})
export class SvgBodySeatsComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
