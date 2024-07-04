import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMoreForPaymentMethodComponent } from './svg-more-for-payment-method.component';

describe('SvgMoreForPaymentMethodComponent', () => {
  let component: SvgMoreForPaymentMethodComponent;
  let fixture: ComponentFixture<SvgMoreForPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgMoreForPaymentMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgMoreForPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
