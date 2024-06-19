import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgVisaComponent } from './svg-visa.component';

describe('SvgVisaComponent', () => {
  let component: SvgVisaComponent;
  let fixture: ComponentFixture<SvgVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgVisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
