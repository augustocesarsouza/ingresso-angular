import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAndDayWeakAndMovieTheaterTypesComponent } from './day-and-day-weak-and-movie-theater-types.component';

describe('DayAndDayWeakAndMovieTheaterTypesComponent', () => {
  let component: DayAndDayWeakAndMovieTheaterTypesComponent;
  let fixture: ComponentFixture<DayAndDayWeakAndMovieTheaterTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayAndDayWeakAndMovieTheaterTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayAndDayWeakAndMovieTheaterTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
