import { TestBed } from '@angular/core/testing';

import { StatesAndCitysService } from './states-and-citys.service';

describe('StatesAndCitysService', () => {
  let service: StatesAndCitysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesAndCitysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
