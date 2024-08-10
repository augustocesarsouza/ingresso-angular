import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPartToCheckoutLoginComponent } from './header-part-to-checkout-login.component';

describe('HeaderPartToCheckoutLoginComponent', () => {
  let component: HeaderPartToCheckoutLoginComponent;
  let fixture: ComponentFixture<HeaderPartToCheckoutLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPartToCheckoutLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPartToCheckoutLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
