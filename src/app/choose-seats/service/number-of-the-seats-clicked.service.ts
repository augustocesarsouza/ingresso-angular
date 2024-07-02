import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberOfTheSeatsClickedService {
  private numberOfTheClickSeatsSource = new BehaviorSubject<number>(0);
  numberOfTheClickSeats$ = this.numberOfTheClickSeatsSource.asObservable();

  constructor() { }

  updateNumberOfTheClickSeats(newNumber: number) {
    this.numberOfTheClickSeatsSource.next(newNumber);
  }

  get currentSeats(): number {
    return this.numberOfTheClickSeatsSource.getValue();
  }
}
