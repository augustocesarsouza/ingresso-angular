import { TestBed } from '@angular/core/testing';

import { FinalPaymentCheckoutMovieService } from './final-payment-checkout-movie.service';

describe('FinalPaymentCheckoutMovieService', () => {
  let service: FinalPaymentCheckoutMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalPaymentCheckoutMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
