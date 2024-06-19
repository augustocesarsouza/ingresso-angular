import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieChooseMovieTheaterComponent } from './movie-choose-movie-theater.component';

describe('MovieChooseMovieTheaterComponent', () => {
  let component: MovieChooseMovieTheaterComponent;
  let fixture: ComponentFixture<MovieChooseMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieChooseMovieTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieChooseMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
