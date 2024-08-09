import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLocationHoursFilteredComponent } from './movie-location-hours-filtered.component';

describe('MovieLocationHoursFilteredComponent', () => {
  let component: MovieLocationHoursFilteredComponent;
  let fixture: ComponentFixture<MovieLocationHoursFilteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieLocationHoursFilteredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieLocationHoursFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
