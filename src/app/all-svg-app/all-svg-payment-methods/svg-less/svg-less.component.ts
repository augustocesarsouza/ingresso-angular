import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-less-for-payment-method',
  templateUrl: './svg-less.component.html',
  styleUrl: './svg-less.component.scss'
})
export class SvgLessForPaymentMethodComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
