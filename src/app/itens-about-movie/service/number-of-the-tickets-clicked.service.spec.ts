import { TestBed } from '@angular/core/testing';

import { NumberOfTheTicketsClickedService } from './number-of-the-tickets-clicked.service';

describe('NumberOfTheTicketsClickedService', () => {
  let service: NumberOfTheTicketsClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberOfTheTicketsClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
