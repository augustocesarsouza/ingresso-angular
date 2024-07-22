import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgGooglePlayComponent } from './svg-google-play.component';

describe('SvgGooglePlayComponent', () => {
  let component: SvgGooglePlayComponent;
  let fixture: ComponentFixture<SvgGooglePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgGooglePlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgGooglePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
