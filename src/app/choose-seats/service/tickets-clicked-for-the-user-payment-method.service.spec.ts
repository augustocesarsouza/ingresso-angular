import { TestBed } from '@angular/core/testing';

import { TicketsClickedForTheUserPaymentMethodService } from './tickets-clicked-for-the-user-payment-method.service';

describe('TicketsClickedForTheUserPaymentMethodService', () => {
  let service: TicketsClickedForTheUserPaymentMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsClickedForTheUserPaymentMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
