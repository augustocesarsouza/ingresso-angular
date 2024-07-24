import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-ticket-be-client',
  templateUrl: './svg-ticket-be-client.component.html',
  styleUrl: './svg-ticket-be-client.component.scss'
})
export class SvgTicketBeClientComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
