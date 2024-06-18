import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAmericanExpressComponent } from './svg-american-express.component';

describe('SvgAmericanExpressComponent', () => {
  let component: SvgAmericanExpressComponent;
  let fixture: ComponentFixture<SvgAmericanExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgAmericanExpressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgAmericanExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
