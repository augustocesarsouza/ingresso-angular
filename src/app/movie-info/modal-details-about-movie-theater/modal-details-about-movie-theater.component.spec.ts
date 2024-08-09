import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsAboutMovieTheaterComponent } from './modal-details-about-movie-theater.component';

describe('ModalDetailsAboutMovieTheaterComponent', () => {
  let component: ModalDetailsAboutMovieTheaterComponent;
  let fixture: ComponentFixture<ModalDetailsAboutMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDetailsAboutMovieTheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDetailsAboutMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
