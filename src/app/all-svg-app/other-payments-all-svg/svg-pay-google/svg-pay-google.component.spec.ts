import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPayGoogleComponent } from './svg-pay-google.component';

describe('SvgPayGoogleComponent', () => {
  let component: SvgPayGoogleComponent;
  let fixture: ComponentFixture<SvgPayGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPayGoogleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPayGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
