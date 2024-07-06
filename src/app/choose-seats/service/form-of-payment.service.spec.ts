import { TestBed } from '@angular/core/testing';

import { FormOfPaymentService } from './form-of-payment.service';

describe('FormOfPaymentService', () => {
  let service: FormOfPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOfPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
