import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-seats',
  templateUrl: './svg-seats.component.html',
  styleUrl: './svg-seats.component.scss'
})
export class SvgSeatsComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() fill: string = 'blue';

  constructor(){
  }
}
