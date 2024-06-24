import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLoupeMovieTheaterComponent } from './svg-loupe-movie-theater.component';

describe('SvgLoupeMovieTheaterComponent', () => {
  let component: SvgLoupeMovieTheaterComponent;
  let fixture: ComponentFixture<SvgLoupeMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLoupeMovieTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLoupeMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
