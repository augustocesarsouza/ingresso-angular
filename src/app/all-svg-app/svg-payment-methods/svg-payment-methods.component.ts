import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-payment-methods',
  templateUrl: './svg-payment-methods.component.html',
  styleUrl: './svg-payment-methods.component.scss'
})
export class SvgPaymentMethodsComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() fillColor: string = 'currentColor';

  constructor(){
  }
}
