import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BomboniereService } from '../service-bomboniere/bomboniere.service';
import { OrderSummaryService } from '../service/order-summary.service';

interface Product {
  title: string;
  imgUrl: string;
  price: string;
  fee: string;
}

export interface ObjProductClicked {
  title: string;
  quanityClicked: number;
  priceTotal: string;
  price: number;
  fee: number;
}

@Component({
  selector: 'app-bomboniere',
  templateUrl: './bomboniere.component.html',
  styleUrl: './bomboniere.component.scss'
})
export class BomboniereComponent implements OnInit {
  listProductForChoose: Product[] = [];
  private subscription: Subscription[] = [];
  private timeoutIdContainerLessAndMore: any;
  private settimeoutNumber: any;
  items: number[] = [];
  numberItemsMaxProduct = 8;
  itemsPaymentClicked: number[] = [];
  whatFunctionClicked = 'tickets';
  containerLessAndMore!: NodeListOf<HTMLElement>;
  spanTotalTaxaPrice!: HTMLElement;
  totalItem: number = 0;
  totalFeeSum: number = 0;
  quantityAlreadyBeenClickedLessMore = 0;
  listOfProductClicked: ObjProductClicked[] = [];
  listOfProductClickedByUser = [];
  // formsOfPayment: FormsOfPayment[] = [];
  // listOfFormPaymentClicked: FormsOfPaymentClicked[] = [];

  constructor(private bomboniere_service: BomboniereService, private order_summary_service: OrderSummaryService){
  }

  ngOnInit(): void {
    this.items = Array.from({ length: this.numberItemsMaxProduct }, (_, i) => i);
    if(typeof document !== 'undefined'){
      this.subscription.push(this.order_summary_service.currentOrderSummary$.subscribe((el) => {
        if(el){
          this.bomboniere_service.getMovieIdInfo(el.movieId).subscribe((result: any) => {
            this.listProductForChoose = result.data;
          });
        }
      }));

      if(this.timeoutIdContainerLessAndMore){
        clearTimeout(this.timeoutIdContainerLessAndMore);
      }

      this.timeoutIdContainerLessAndMore = setTimeout(() => {
        this.containerLessAndMore = document.querySelectorAll(".container-less-and-more-product");
        let totalItem = document.querySelector(".span-price-toal") as HTMLElement;
        this.spanTotalTaxaPrice = document.querySelector(".span-total-taxa-price") as HTMLElement;
        let element = totalItem.textContent?.slice(2).trim().replace(",", ".");
        this.totalItem = Number(element);

        let listProductClicked: ObjProductClicked[] = [];

        this.bomboniere_service.numberOfTheProductClicked$.subscribe((listProduct) => {
          listProductClicked = listProduct;
          this.listOfProductClicked = listProduct;
        });

        let ProductAlreadyChooseByUser = 0;

        listProductClicked.forEach((elProduct) => {
          ProductAlreadyChooseByUser += elProduct.quanityClicked;
        });

        this.quantityAlreadyBeenClickedLessMore = ProductAlreadyChooseByUser;

        let containerInfoAboutTheProduct = document.querySelectorAll(".container-info-about-the-product") as NodeListOf<HTMLElement>;

        containerInfoAboutTheProduct.forEach((container) => {
          let containerPriceProductAndLessAndMore = container.querySelector(".container-price-product-and-less-and-more") as HTMLElement;
          let h1ProductTitle = container.querySelector(".h1-product-title") as HTMLElement;

          let containerLessAndMoreProduct = containerPriceProductAndLessAndMore.querySelector(".container-less-and-more-product") as HTMLElement;
          let spanQuantityMore = containerLessAndMoreProduct.querySelector(".span-quantity-more") as HTMLElement;

          if(ProductAlreadyChooseByUser >= this.numberItemsMaxProduct){
            let containerLess = containerLessAndMoreProduct.firstChild as HTMLElement;
            this.disableColorLess(containerLess);

            let containerMore = containerLessAndMoreProduct.lastChild as HTMLElement;
            this.disableColorMore(containerMore);
          }else {
            let containerLess = containerLessAndMoreProduct.firstChild as HTMLElement;
            this.disableColorLess(containerLess);

            let containerMore = containerLessAndMoreProduct.lastChild as HTMLElement;
            this.activeColorMore(containerMore);
          }

          listProductClicked.forEach((elProduct) => {
            if(h1ProductTitle.textContent === elProduct.title){
              spanQuantityMore.textContent = elProduct.quanityClicked.toString();

              if(ProductAlreadyChooseByUser < this.numberItemsMaxProduct){
                let containerLess = containerLessAndMoreProduct.firstChild as HTMLElement;
                this.activeColorLess(containerLess);

                let containerMore = containerLessAndMoreProduct.lastChild as HTMLElement;
                this.activeColorMore(containerMore);
              }else {
                let containerLess = containerLessAndMoreProduct.firstChild as HTMLElement;
                this.activeColorLess(containerLess);

                let containerMore = containerLessAndMoreProduct.lastChild as HTMLElement;
                this.disableColorMore(containerMore);
              }
            };
          })
        });
      }, 50);
    }
  }

  disableColorLess(containerLess: HTMLElement){
    containerLess.style.backgroundColor = "rgb(63, 71, 93)";
    containerLess.style.cursor = "auto";
  }

  disableColorMore(containerMore: HTMLElement){
    containerMore.style.backgroundColor = "rgb(63, 71, 93)";
    containerMore.style.cursor = "auto";
  }

  activeColorLess(containerLess: HTMLElement){
    containerLess.style.backgroundColor = "rgb(152, 170, 236)";
    containerLess.style.cursor = "pointer";
  }

  activeColorMore(containerMore: HTMLElement){
    containerMore.style.backgroundColor = "rgb(152, 170, 236)";
    containerMore.style.cursor = "pointer";
  }

  makeTheSumForPutTotalValue(){
    let totalItemInner = document.querySelector(".span-price-toal");

    clearTimeout(this.settimeoutNumber);

    let sumAllValueSpan = 0;

    this.settimeoutNumber = setTimeout(() => {
      let spanPriceProduct = document.querySelectorAll(".span-price-product") as NodeListOf<HTMLElement>;
      spanPriceProduct.forEach((el) => {
        if(el.textContent === null) return;

        let element = el.textContent.slice(2).trim().replace(",", ".");
        sumAllValueSpan += Number(element);

      });

      if(totalItemInner === null) return;
      if(totalItemInner.textContent === null) return;

      sumAllValueSpan += this.totalItem;

      totalItemInner.textContent = `R$ ${sumAllValueSpan.toFixed(2)}`;
    }, 30);
  }

  onClickMoreButton(form: Product, containerLessAndMore: HTMLDivElement){
    let spanQuantityMore = containerLessAndMore.querySelector(".span-quantity-more");

    if(spanQuantityMore && Number(spanQuantityMore.textContent) >= 0 && Number(spanQuantityMore.textContent) < this.items.length && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      let value = Number(spanQuantityMore.textContent) + 1;
      spanQuantityMore.textContent = value.toString();
      this.quantityAlreadyBeenClickedLessMore += 1;

      if(this.listOfProductClicked.some((el) => el.title === form.title)){
        this.listOfProductClicked.map((el) => {
          if(el.title === form.title){
            el.quanityClicked += 1;
            let totalFee = el.fee * el.quanityClicked;
            this.totalFeeSum += el.fee;
            this.totalFeeSum = parseFloat(this.totalFeeSum.toFixed(1));
            let priceTotalNumber = el.price * el.quanityClicked + totalFee;
            el.priceTotal = String(priceTotalNumber.toFixed(2));
          };

          return el;
        });
      }else {
        let price = Number(form.price) + Number(form.fee);
        this.totalFeeSum += Number(form.fee);
        this.totalFeeSum = parseFloat(this.totalFeeSum.toFixed(1));
        this.listOfProductClicked.push({ title: form.title, quanityClicked: 1, priceTotal: String(price.toFixed(2)), price: Number(form.price), fee: Number(form.fee) });
      };

      this.makeTheSumForPutTotalValue();

      this.spanTotalTaxaPrice.textContent = `R$ ${this.totalFeeSum.toFixed(2)}`;

      this.bomboniere_service.updateNumberOfTheClickProduct(this.listOfProductClicked);

      if(spanQuantityMore && Number(spanQuantityMore.textContent) > 0){
        let containerLess = containerLessAndMore.firstChild as HTMLElement;
        containerLess.style.backgroundColor = "rgb(152, 170, 236)";
        containerLess.style.cursor = "pointer";
      }

      if(this.quantityAlreadyBeenClickedLessMore === this.items.length){
          this.containerLessAndMore.forEach((el) => {
          let containerMore = el.lastChild as HTMLElement;

          containerMore.style.backgroundColor = "rgb(63, 71, 93)";
          containerMore.style.cursor = "auto";
        });
      }
    }
  }

  onClickLessButton(form: Product, containerLessAndMore: HTMLDivElement){
    let spanQuantityMore = containerLessAndMore.querySelector(".span-quantity-more");

    if(spanQuantityMore && Number(spanQuantityMore.textContent) > 0){
      let value = Number(spanQuantityMore.textContent) - 1;
      spanQuantityMore.textContent = value.toString();
      this.quantityAlreadyBeenClickedLessMore -= 1;

      if(this.listOfProductClicked.some((el) => el.title === form.title)){
        this.listOfProductClicked.map((el) => {
          if(el.title === form.title){
            el.quanityClicked -= 1;
            let totalFee = el.fee * el.quanityClicked;
            this.totalFeeSum -= el.fee;
            this.totalFeeSum = parseFloat(this.totalFeeSum.toFixed(1));
            let priceTotalNumber = el.price * el.quanityClicked + totalFee;
            el.priceTotal = String(priceTotalNumber.toFixed(2));
          };

          return el;
        });
      };

      this.spanTotalTaxaPrice.textContent = `R$ ${this.totalFeeSum.toFixed(2)}`;

      this.makeTheSumForPutTotalValue();

      this.listOfProductClicked = this.listOfProductClicked.filter((el) => el.quanityClicked > 0);

      this.bomboniere_service.updateNumberOfTheClickProduct(this.listOfProductClicked);

      if(this.quantityAlreadyBeenClickedLessMore < this.items.length){
        this.containerLessAndMore.forEach((el) => {

          let containerMore = el.lastChild as HTMLElement;
          containerMore.style.backgroundColor = "rgb(152, 170, 236";
          containerMore.style.cursor = "pointer";

          if(spanQuantityMore && Number(el.textContent) <= 0 ){
            let containerLess = el.firstChild as HTMLElement;
            containerLess.style.backgroundColor = "rgb(63, 71, 93)";
            containerLess.style.cursor = "auto";
          }
        });
      }
    }
  }

  onMouseEnterLess($event: MouseEvent, form: Product){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;
    if(elementMain)

    if(elementMain && Number(elementMain.textContent) > 0 ){
      element.style.backgroundColor = "rgb(152, 170, 236)";
    }
  }

  onMouseLeaveLess($event: MouseEvent, form: Product){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) > 0){
      element.style.backgroundColor = "rgb(114, 130, 182)";
    }
  }

  onMouseEnterMore($event: MouseEvent, form: Product){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) >= 0 && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      element.style.backgroundColor = "rgb(114, 130, 182)";
    }
  }

  onMouseLeaveMore($event: MouseEvent, form: Product){
    let elementMain = $event.relatedTarget as HTMLElement;
    let element = $event.target as HTMLElement;

    if(elementMain && Number(elementMain.textContent) >= 0 && this.quantityAlreadyBeenClickedLessMore < this.items.length){
      element.style.backgroundColor = "rgb(152, 170, 236)";
    }
  }

  ngOnDestroy() {
    if(this.subscription.length > 0){
      this.subscription.forEach((el) => {
        el.unsubscribe();
      })
    }

    if(this.timeoutIdContainerLessAndMore){
      clearTimeout(this.timeoutIdContainerLessAndMore);
    }

    if(this.subscription.length > 0){
      this.subscription.forEach((el) => {
        el.unsubscribe();
      })
    }

    if(this.timeoutIdContainerLessAndMore){
      clearTimeout(this.timeoutIdContainerLessAndMore);
    }

    clearTimeout(this.settimeoutNumber);

  }
}
