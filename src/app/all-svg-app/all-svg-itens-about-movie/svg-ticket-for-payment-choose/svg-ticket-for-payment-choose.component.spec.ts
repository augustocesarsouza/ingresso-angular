import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketForPaymentChooseComponent } from './svg-ticket-for-payment-choose.component';

describe('SvgTicketForPaymentChooseComponent', () => {
  let component: SvgTicketForPaymentChooseComponent;
  let fixture: ComponentFixture<SvgTicketForPaymentChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketForPaymentChooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketForPaymentChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
