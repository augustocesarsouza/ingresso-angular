import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-wheelchair',
  templateUrl: './svg-wheelchair.component.html',
  styleUrl: './svg-wheelchair.component.scss'
})
export class SvgWheelchairComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
