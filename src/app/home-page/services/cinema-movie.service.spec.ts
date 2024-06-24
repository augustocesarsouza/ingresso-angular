import { TestBed } from '@angular/core/testing';

import { CinemaMovieService } from './cinema-movie.service';

describe('CinemaMovieService', () => {
  let service: CinemaMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
