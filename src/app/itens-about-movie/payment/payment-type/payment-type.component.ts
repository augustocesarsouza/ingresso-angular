import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderSummaryService } from '../../service/order-summary.service';
import { Subscription } from 'rxjs';
import { ObjectForOrderSummary } from '../../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { SeatsService } from '../../service/seats.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  allContainerCreditDebitPixPay!: NodeListOf<HTMLElement>;
  elementClickedPaymentType = "";
  private timeoutMouseEnter: any;

  mouseEnterInputNumber = false;
  mouseEnterInputExpirationDate = false;
  mouseEnterInputSecurityCode = false;
  inputThatWasClick: HTMLInputElement | undefined = undefined;
  inputExpirationDate: HTMLInputElement | undefined = undefined;
  inputSecurityCode: HTMLInputElement | undefined = undefined;

  paymentRequest!: google.payments.api.PaymentDataRequest;
  typeof: any;
  isWindowDefined = false;

  constructor(private order_summary_service: OrderSummaryService){

  }

  ngOnInit(): void {
    this.isWindowDefined = typeof window !== 'undefined';

    if(typeof document !== 'undefined' && typeof window !== 'undefined'){
      this.allContainerCreditDebitPixPay = document.querySelectorAll(".type-payment-method") as NodeListOf<HTMLElement>;

      // this.subscription.push(this.order_summary_service.currentOrderSummary$.subscribe((el: ObjectForOrderSummary | null) => {
      //   if(el){
      //     console.log(el);
      //     // PEGAR OS ID 'TICKETS' ID 'PIPOCA' E AINDA FALTA 'ASSENTO'
      //   }
      // }));



      this.paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['VISA', 'MASTERCARD'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              }
            },
          },
        ],
        merchantInfo: {
          merchantId: '188472847284728742784',
          merchantName: 'Demo Only',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '100.00',
          currencyCode: 'BRL',
          countryCode: 'BR',
        }
      };

      // document.body.addEventListener("click", this.handleEventClickBody.bind(this));
    }
  }

  onLoadPaymentData($event: Event){
    console.log("teste");

  }

  onClickMethodPayment(containerCardCredit: HTMLDivElement, typePaymentName: string){
    this.removeBorderContainer();

    containerCardCredit.style.border = '1px solid rgb(152, 170, 236)';

    if(this.elementClickedPaymentType === typePaymentName){
      this.elementClickedPaymentType = "";
    }else {
      this.elementClickedPaymentType = typePaymentName;
    }

    if(typeof document !== 'undefined'){
      setTimeout(() => {
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
      }, 50);

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
