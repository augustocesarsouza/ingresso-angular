import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanExpressSvgComponent } from './american-express-svg.component';

describe('AmericanExpressSvgComponent', () => {
  let component: AmericanExpressSvgComponent;
  let fixture: ComponentFixture<AmericanExpressSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmericanExpressSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmericanExpressSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
