import { TestBed } from '@angular/core/testing';

import { CheckIfEmailAlreadyExsitsService } from './check-if-email-already-exsits.service';

describe('CheckIfEmailAlreadyExsitsService', () => {
  let service: CheckIfEmailAlreadyExsitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckIfEmailAlreadyExsitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
