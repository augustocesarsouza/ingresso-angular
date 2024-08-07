import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginCheckoutComponent } from './modal-login-checkout.component';

describe('ModalLoginCheckoutComponent', () => {
  let component: ModalLoginCheckoutComponent;
  let fixture: ComponentFixture<ModalLoginCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalLoginCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalLoginCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
