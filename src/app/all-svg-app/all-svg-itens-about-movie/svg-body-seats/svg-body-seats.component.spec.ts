import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBodySeatsComponent } from './svg-body-seats.component';

describe('SvgBodySeatsComponent', () => {
  let component: SvgBodySeatsComponent;
  let fixture: ComponentFixture<SvgBodySeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgBodySeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBodySeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
