import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-calendar',
  templateUrl: './svg-calendar.component.html',
  styleUrl: './svg-calendar.component.scss'
})
export class SvgCalendarComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
