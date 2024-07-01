import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  private arraySeatsSubject = new BehaviorSubject<string[]>([]);
  arraySeats$ = this.arraySeatsSubject.asObservable();

  constructor() { }

  updateSeats(seats: string[]) {
    this.arraySeatsSubject.next(seats);
  }

  get currentSeats(): string[] {
    return this.arraySeatsSubject.getValue();
  }
}
