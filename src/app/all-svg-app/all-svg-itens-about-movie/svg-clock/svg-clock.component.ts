import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-clock',
  templateUrl: './svg-clock.component.html',
  styleUrl: './svg-clock.component.scss'
})
export class SvgClockComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
