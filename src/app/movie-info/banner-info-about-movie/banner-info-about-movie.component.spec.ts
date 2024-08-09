import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInfoAboutMovieComponent } from './banner-info-about-movie.component';

describe('BannerInfoAboutMovieComponent', () => {
  let component: BannerInfoAboutMovieComponent;
  let fixture: ComponentFixture<BannerInfoAboutMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerInfoAboutMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerInfoAboutMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
