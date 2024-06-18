import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPayComponent } from './svg-pay.component';

describe('SvgPayComponent', () => {
  let component: SvgPayComponent;
  let fixture: ComponentFixture<SvgPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
