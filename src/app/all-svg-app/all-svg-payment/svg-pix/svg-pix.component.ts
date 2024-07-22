import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-payment-pix',
  templateUrl: './svg-pix.component.html',
  styleUrl: './svg-pix.component.scss'
})
export class SvgPixPaymentComponent {
  @Input() width: string = '40px';
  @Input() height: string = '20px';

  constructor(){
  }
}
