import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgExclamationMarkPaymentComponent } from './svg-exclamation-mark-payment.component';

describe('SvgExclamationMarkPaymentComponent', () => {
  let component: SvgExclamationMarkPaymentComponent;
  let fixture: ComponentFixture<SvgExclamationMarkPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgExclamationMarkPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgExclamationMarkPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
