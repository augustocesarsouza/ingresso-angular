import { Component, OnInit } from '@angular/core';
import { OrderSummaryService } from '../../service/order-summary.service';
import { Subscription } from 'rxjs';
import { ConsultaCepService } from '../../../login-and-register-user/services/consulta-cep.service';
import { CpfService } from '../../service/cpf.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent implements OnInit {
  private subscription: Subscription[] = [];
  // rotate = "180";
  rotateClubeUol = "180";
  rotateCuponGiftPresent = "180";

  constructor(private order_summary_service: OrderSummaryService, private cpf_service: CpfService){
  }

  ngOnInit(): void {
    if(typeof document !== 'undefined'){
      this.subscription.push(this.order_summary_service.currentOrderSummary$.subscribe((el) => {
        if(el){
          // console.log(el);
        }
      }));

      import('inputmask').then(Inputmask => {
        let inputNumberCpfCnpj = document.getElementById('input-number-cpf-cnpj');

        if (inputNumberCpfCnpj) {
          const mask = new Inputmask.default({
            mask: [
              "999.999.999-99",
              "99.999.999/9999-99"
            ],
            definitions: {
              '9': {
                validator: "[0-9]",
                cardinality: 1
              }
            },
            keepStatic: true
          });
          mask.mask(inputNumberCpfCnpj);
        }
      });
    }
  }

  onClickContainerImgClubeMain(){
    if(this.rotateClubeUol === "180"){
      this.rotateClubeUol = "0";
    }else if(this.rotateClubeUol === "0"){
      this.rotateClubeUol = "180";
    }
  }

  onClickCuponGiftCard(){
    if(this.rotateCuponGiftPresent === "180"){
      this.rotateCuponGiftPresent = "0";
    }else if(this.rotateCuponGiftPresent === "0"){
      this.rotateCuponGiftPresent = "180";
    }
  }

  onChangeInputCpfCnpj(inputCpfCnpj: HTMLInputElement){
    const valueInput = inputCpfCnpj.value.replace(/[_\-./]/g, '');
  }

  onChangeInputCoupon(inputCoupon: HTMLInputElement){
    const valueInput = inputCoupon.value;
  }
}
