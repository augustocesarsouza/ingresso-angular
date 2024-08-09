import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoAboutMovieComponent } from './movie-info-about-movie.component';

describe('MovieInfoAboutMovieComponent', () => {
  let component: MovieInfoAboutMovieComponent;
  let fixture: ComponentFixture<MovieInfoAboutMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieInfoAboutMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieInfoAboutMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
