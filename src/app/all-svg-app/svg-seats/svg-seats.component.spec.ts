import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSeatsComponent } from './svg-seats.component';

describe('SvgSeatsComponent', () => {
  let component: SvgSeatsComponent;
  let fixture: ComponentFixture<SvgSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgSeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
