import { Component, OnInit } from '@angular/core';
import { OrderSummaryService } from '../../service/order-summary.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent implements OnInit {
  private subscription: Subscription[] = [];
  rotateCuponGiftPresent = "180";

  constructor(private order_summary_service: OrderSummaryService){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      this.subscription.push(this.order_summary_service.currentOrderSummary$.subscribe((el) => {
        if(el){
          // console.log(el);
        }
      }));
    }
  }

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
