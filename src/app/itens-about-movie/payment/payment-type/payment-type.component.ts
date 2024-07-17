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
}
