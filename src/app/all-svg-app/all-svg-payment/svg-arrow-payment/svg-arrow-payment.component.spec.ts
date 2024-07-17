import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowPaymentComponent } from './svg-arrow-payment.component';

describe('SvgArrowPaymentComponent', () => {
  let component: SvgArrowPaymentComponent;
  let fixture: ComponentFixture<SvgArrowPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgArrowPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
