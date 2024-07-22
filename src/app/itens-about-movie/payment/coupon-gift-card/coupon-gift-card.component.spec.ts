import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponGiftCardComponent } from './coupon-gift-card.component';

describe('CouponGiftCardComponent', () => {
  let component: CouponGiftCardComponent;
  let fixture: ComponentFixture<CouponGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponGiftCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
