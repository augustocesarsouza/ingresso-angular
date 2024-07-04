import { TestBed } from '@angular/core/testing';

import { WitchFunctionWasClickedService } from './witch-function-was-clicked.service';

describe('WitchFunctionWasClickedService', () => {
  let service: WitchFunctionWasClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WitchFunctionWasClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
