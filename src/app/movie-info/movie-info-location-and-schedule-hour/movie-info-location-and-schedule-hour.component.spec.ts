import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoLocationAndScheduleHourComponent } from './movie-info-location-and-schedule-hour.component';

describe('MovieInfoLocationAndScheduleHourComponent', () => {
  let component: MovieInfoLocationAndScheduleHourComponent;
  let fixture: ComponentFixture<MovieInfoLocationAndScheduleHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieInfoLocationAndScheduleHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieInfoLocationAndScheduleHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
