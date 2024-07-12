import { TestBed } from '@angular/core/testing';

import { NumberOfTheSeatsClickedService } from './number-of-the-seats-clicked.service';

describe('NumberOfTheSeatsClickedService', () => {
  let service: NumberOfTheSeatsClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberOfTheSeatsClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
