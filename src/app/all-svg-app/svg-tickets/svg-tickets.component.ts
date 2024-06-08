import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-tickets',
  templateUrl: './svg-tickets.component.html',
  styleUrl: './svg-tickets.component.scss'
})
export class SvgTicketsComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() fillColor: string = 'currentColor';

  constructor(){
  }
}
