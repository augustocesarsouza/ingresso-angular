import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderSummaryService } from '../../service/order-summary.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  allContainerCreditDebitPixPay!: NodeListOf<HTMLElement>;
  elementClickedPaymentType = "debit";
  private timeoutMouseEnter: any;

  mouseEnterInputNumber = false;
  mouseEnterInputExpirationDate = false;
  mouseEnterInputSecurityCode = false;
  inputThatWasClick: HTMLInputElement | undefined = undefined;
  inputExpirationDate: HTMLInputElement | undefined = undefined;
  inputSecurityCode: HTMLInputElement | undefined = undefined;

  constructor(private order_summary_service: OrderSummaryService){
  }



  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      this.allContainerCreditDebitPixPay = document.querySelectorAll(".type-payment-method") as NodeListOf<HTMLElement>;

      this.subscription.push(this.order_summary_service.currentOrderSummary$.subscribe((el) => {
        if(el){
          // console.log(el);
        }
      }));

      import('inputmask').then(Inputmask => {
        let inputNumberCard = document.getElementById('input-number-card');
        let inputExpirationDate = document.getElementById('input-expiration-date');
        let inputSecurityCode = document.getElementById('input-security-code');

        if (inputNumberCard) {
          let mask = new Inputmask.default({
            mask: "9999 9999 9999 9999",
            placeholder: " ",
            insertMode: true,
            showMaskOnHover: false,
            showMaskOnFocus: false
          });
          mask.mask(inputNumberCard);
        }

        if (inputExpirationDate) {
          let mask = new Inputmask.default({
            mask: "99/99",
            placeholder: " ",
            insertMode: true,  // Ensure the mask does not insert mode to avoid jumping characters
            showMaskOnHover: false,
            showMaskOnFocus: false
          });
          mask.mask(inputExpirationDate);
        }

        if (inputSecurityCode) {
          let mask = new Inputmask.default({
            mask: "9999",
            placeholder: " ",
            insertMode: true,
            showMaskOnHover: false,
            showMaskOnFocus: false
          });
          mask.mask(inputSecurityCode);
        }
      });

      // document.body.addEventListener("click", this.handleEventClickBody.bind(this));
    }
  }

  onClickMethodPayment(containerCardCredit: HTMLDivElement, typePaymentName: string){
    this.removeBorderContainer();

    containerCardCredit.style.border = '1px solid rgb(152, 170, 236)';

    if(this.elementClickedPaymentType === typePaymentName){
      this.elementClickedPaymentType = "";
    }else {
      this.elementClickedPaymentType = typePaymentName;
    }
  }

  removeBorderContainer(){
    if(this.allContainerCreditDebitPixPay.length >= 0){
      this.allContainerCreditDebitPixPay.forEach((el) => {
        el.style.border = 'none';
      });
    }
  }

  ngOnDestroy(): void {
    // if(typeof document !== 'undefined'){
    //   document.body.removeEventListener("click", this.handleEventClickBody);
    // }
  }
}
