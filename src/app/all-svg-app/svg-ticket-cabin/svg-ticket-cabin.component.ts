import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-ticket-cabin',
  templateUrl: './svg-ticket-cabin.component.html',
  styleUrl: './svg-ticket-cabin.component.scss'
})
export class SvgTicketCabinComponent {
  @Input() width: string = '25px';
  @Input() height: string = '25px';
  @Input() fill: string = '#fff';
  @Input() background: string = '';

  constructor(){
  }
}
