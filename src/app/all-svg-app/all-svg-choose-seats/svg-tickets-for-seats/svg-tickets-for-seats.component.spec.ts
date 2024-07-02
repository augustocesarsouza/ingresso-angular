import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketsForSeatsComponent } from './svg-tickets-for-seats.component';

describe('SvgTicketsForSeatsComponent', () => {
  let component: SvgTicketsForSeatsComponent;
  let fixture: ComponentFixture<SvgTicketsForSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketsForSeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketsForSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
