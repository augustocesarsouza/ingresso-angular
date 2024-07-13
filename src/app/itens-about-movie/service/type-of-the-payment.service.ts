import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItensClickedByUser } from '../type-of-the-payment/type-of-the-payment.component';

@Injectable({
  providedIn: 'root'
})
export class TypeOfThePaymentService {
  private quantityAlreadyBeenClickedLessMore = new BehaviorSubject<number>(0);
  quantityAlreadyBeenClickedLessMore$ = this.quantityAlreadyBeenClickedLessMore.asObservable();

  constructor() { }

  updateQuantityAlreadyBeenClickedLessMore(number: number) {
    this.quantityAlreadyBeenClickedLessMore.next(number);
  }

  get currentSeats(): number {
    return this.quantityAlreadyBeenClickedLessMore.getValue();
  }

  private itensClickedTypeOfPayment = new BehaviorSubject<ItensClickedByUser[]>([]);
  itensClickedTypeOfPayment$ = this.itensClickedTypeOfPayment.asObservable();

  updateItensClickedTypeOfPayment(itens: ItensClickedByUser[]) {
    this.itensClickedTypeOfPayment.next(itens);
  }

  get currentItens(): ItensClickedByUser[] {
    return this.itensClickedTypeOfPayment.getValue();
  }
}
