import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberOfTheTicketsClickedService {

  private numberOfTheClickTicketsSource = new BehaviorSubject<number[]>([]);
  numberOfTheClickTickets$ = this.numberOfTheClickTicketsSource.asObservable();

  constructor() { }

  updateNumberOfTheClickTickets(newNumber: number[]) {
    this.numberOfTheClickTicketsSource.next(newNumber);
  }

  get currentSeats(): number[] {
    return this.numberOfTheClickTicketsSource.getValue();
  }
}
