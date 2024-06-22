import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuduleMovieTheaterComponent } from './schudule-movie-theater.component';

describe('SchuduleMovieTheaterComponent', () => {
  let component: SchuduleMovieTheaterComponent;
  let fixture: ComponentFixture<SchuduleMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchuduleMovieTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchuduleMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
