import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon-gift-card',
  templateUrl: './coupon-gift-card.component.html',
  styleUrl: './coupon-gift-card.component.scss'
})
export class CouponGiftCardComponent {
  rotateCuponGiftPresent = "180";


  onClickCuponGiftCard(){
    if(this.rotateCuponGiftPresent === "180"){
      this.rotateCuponGiftPresent = "0";
    }else if(this.rotateCuponGiftPresent === "0"){
      this.rotateCuponGiftPresent = "180";
    }
  }

  onChangeInputCoupon(inputCoupon: HTMLInputElement){
    const valueInput = inputCoupon.value;
  }
}
