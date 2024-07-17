import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-payment',
  templateUrl: './svg-arrow-payment.component.html',
  styleUrl: './svg-arrow-payment.component.scss'
})
export class SvgArrowPaymentComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() fill: string = 'rgb(152, 170, 236)';
  @Input() rotate: string = '180';

  constructor(){
  }
}
