import { TestBed } from '@angular/core/testing';

import { CanPassToPopcornService } from './can-pass-to-popcorn.service';

describe('CanPassToPopcornService', () => {
  let service: CanPassToPopcornService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanPassToPopcornService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
