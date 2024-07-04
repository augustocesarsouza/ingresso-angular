import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-ticket-full',
  templateUrl: './svg-ticket-full.component.html',
  styleUrl: './svg-ticket-full.component.scss'
})
export class SvgTicketFullComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
