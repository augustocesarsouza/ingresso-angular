import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAboutMovieTheaterComponent } from './warning-about-movie-theater.component';

describe('WarningAboutMovieTheaterComponent', () => {
  let component: WarningAboutMovieTheaterComponent;
  let fixture: ComponentFixture<WarningAboutMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarningAboutMovieTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarningAboutMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
