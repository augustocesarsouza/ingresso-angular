import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-choose-seats',
  templateUrl: './svg-choose-seats.component.html',
  styleUrl: './svg-choose-seats.component.scss'
})
export class SvgChooseSeatsComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() fill: string = 'red';
  @Input() border: string = '1px solid rgb(52, 60, 70)';
  @Input() borderRadius: string = '50%';
  @Input() padding: string = '4px';

  constructor(){
  }
}
