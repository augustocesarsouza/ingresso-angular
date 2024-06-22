import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPriceComponent } from './svg-price.component';

describe('SvgPriceComponent', () => {
  let component: SvgPriceComponent;
  let fixture: ComponentFixture<SvgPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
