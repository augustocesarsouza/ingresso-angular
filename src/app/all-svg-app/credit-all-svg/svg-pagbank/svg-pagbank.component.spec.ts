import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPagbankComponent } from './svg-pagbank.component';

describe('SvgPagbankComponent', () => {
  let component: SvgPagbankComponent;
  let fixture: ComponentFixture<SvgPagbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPagbankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPagbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
