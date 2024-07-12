import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-ticket-for-payment-choose',
  templateUrl: './svg-ticket-for-payment-choose.component.html',
  styleUrl: './svg-ticket-for-payment-choose.component.scss'
})
export class SvgTicketForPaymentChooseComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';

  constructor(){
  }
}
