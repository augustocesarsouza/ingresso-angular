import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLocationHoursNormalComponent } from './movie-location-hours-normal.component';

describe('MovieLocationHoursNormalComponent', () => {
  let component: MovieLocationHoursNormalComponent;
  let fixture: ComponentFixture<MovieLocationHoursNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieLocationHoursNormalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieLocationHoursNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
