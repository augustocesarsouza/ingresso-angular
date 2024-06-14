import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDebitAllComponent } from './card-debit-all.component';

describe('CardDebitAllComponent', () => {
  let component: CardDebitAllComponent;
  let fixture: ComponentFixture<CardDebitAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDebitAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDebitAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
