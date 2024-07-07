import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfThePaymentComponent } from './type-of-the-payment.component';

describe('TypeOfThePaymentComponent', () => {
  let component: TypeOfThePaymentComponent;
  let fixture: ComponentFixture<TypeOfThePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfThePaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeOfThePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
