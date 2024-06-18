import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPaypalComponent } from './svg-paypal.component';

describe('SvgPaypalComponent', () => {
  let component: SvgPaypalComponent;
  let fixture: ComponentFixture<SvgPaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPaypalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
