import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coupon-and-gift-card',
  templateUrl: './coupon-and-gift-card.component.html',
  styleUrl: './coupon-and-gift-card.component.scss'
})
export class CouponAndGiftCardComponent {
  @Input() width: string = '22px';
  @Input() height: string = '22px';
  @Input() fill: string = 'rgb(152, 170, 236)';

  constructor(){
  }
}
