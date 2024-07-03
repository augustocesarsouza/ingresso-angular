import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-ticket',
  templateUrl: './svg-ticket.component.html',
  styleUrl: './svg-ticket.component.scss'
})
export class SvgTicketComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
