import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WitchFunctionWasClickedService {

  private arrayWhatWasClickedSubject = new BehaviorSubject<string>("");
  arrayWhatWasClicked$ = this.arrayWhatWasClickedSubject.asObservable();

  constructor() { }

  updateWhatWasClicked(whatWasClicked: string) {
    this.arrayWhatWasClickedSubject.next(whatWasClicked);
  }

  get currentWhatWasClicked(): string {
    return this.arrayWhatWasClickedSubject.getValue();
  }
}
