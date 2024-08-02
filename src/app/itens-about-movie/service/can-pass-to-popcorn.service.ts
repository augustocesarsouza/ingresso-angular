import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanPassToPopcornService {

  private canPassOnToPorcorn = new BehaviorSubject<boolean>(false);
  canPassOnToPorcorn$ = this.canPassOnToPorcorn.asObservable();

  constructor() { }

  updateCanPassOnToPorcorn(canPassOnToPorcorn: boolean) {
    this.canPassOnToPorcorn.next(canPassOnToPorcorn);
  }

  get currentCanPassOnToPorcorn(): boolean {
    return this.canPassOnToPorcorn.getValue();
  }
}
