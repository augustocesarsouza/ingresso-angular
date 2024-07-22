import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCardCreditComponent } from './svg-card-credit.component';

describe('SvgCardCreditComponent', () => {
  let component: SvgCardCreditComponent;
  let fixture: ComponentFixture<SvgCardCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgCardCreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCardCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
