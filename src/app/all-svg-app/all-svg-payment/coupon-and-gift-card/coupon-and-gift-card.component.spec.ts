import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAndGiftCardComponent } from './coupon-and-gift-card.component';

describe('CouponAndGiftCardComponent', () => {
  let component: CouponAndGiftCardComponent;
  let fixture: ComponentFixture<CouponAndGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponAndGiftCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponAndGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
