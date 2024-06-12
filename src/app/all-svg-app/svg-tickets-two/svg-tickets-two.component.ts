import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-tickets-two',
  templateUrl: './svg-tickets-two.component.html',
  styleUrl: './svg-tickets-two.component.scss'
})
export class SvgTicketsTwoComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() fillColor: string = 'currentColor';

  constructor(){
  }
}
