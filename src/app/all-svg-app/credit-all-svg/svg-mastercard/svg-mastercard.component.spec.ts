import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMastercardComponent } from './svg-mastercard.component';

describe('SvgMastercardComponent', () => {
  let component: SvgMastercardComponent;
  let fixture: ComponentFixture<SvgMastercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgMastercardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgMastercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
