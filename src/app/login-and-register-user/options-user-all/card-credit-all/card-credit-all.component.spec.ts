import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreditAllComponent } from './card-credit-all.component';

describe('CardCreditAllComponent', () => {
  let component: CardCreditAllComponent;
  let fixture: ComponentFixture<CardCreditAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCreditAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCreditAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
