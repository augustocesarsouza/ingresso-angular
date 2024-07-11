import { TestBed } from '@angular/core/testing';

import { BomboniereService } from './bomboniere.service';

describe('BomboniereService', () => {
  let service: BomboniereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BomboniereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
