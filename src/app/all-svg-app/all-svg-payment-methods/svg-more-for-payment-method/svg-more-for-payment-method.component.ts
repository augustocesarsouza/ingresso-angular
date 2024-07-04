import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-more-for-payment-method',
  templateUrl: './svg-more-for-payment-method.component.html',
  styleUrl: './svg-more-for-payment-method.component.scss'
})
export class SvgMoreForPaymentMethodComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
