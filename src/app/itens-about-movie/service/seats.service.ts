import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  private seatsSubject = new BehaviorSubject<string>("");
  seats$ = this.seatsSubject.asObservable();

  constructor() { }

  updateSeats(seats: string) {
    this.seatsSubject.next(seats);
  }

  private arraySeatsSubject = new BehaviorSubject<string[]>([]);
  arraySeats$ = this.arraySeatsSubject.asObservable();

  updateSeatsArray(seats: string[]) {
    this.arraySeatsSubject.next(seats);
  }

  get currentSeats(): string[] {
    return this.arraySeatsSubject.getValue();
  }
}
