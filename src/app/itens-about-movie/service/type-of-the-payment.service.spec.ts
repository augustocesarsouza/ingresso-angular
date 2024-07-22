import { TestBed } from '@angular/core/testing';

import { TypeOfThePaymentService } from './type-of-the-payment.service';

describe('TypeOfThePaymentService', () => {
  let service: TypeOfThePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfThePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
