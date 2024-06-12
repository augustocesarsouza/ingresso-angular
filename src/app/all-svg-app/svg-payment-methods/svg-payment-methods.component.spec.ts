import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPaymentMethodsComponent } from './svg-payment-methods.component';

describe('SvgPaymentMethodsComponent', () => {
  let component: SvgPaymentMethodsComponent;
  let fixture: ComponentFixture<SvgPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPaymentMethodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
