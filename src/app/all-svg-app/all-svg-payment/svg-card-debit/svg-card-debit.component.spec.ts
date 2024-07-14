import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCardDebitComponent } from './svg-card-debit.component';

describe('SvgCardDebitComponent', () => {
  let component: SvgCardDebitComponent;
  let fixture: ComponentFixture<SvgCardDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgCardDebitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCardDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
