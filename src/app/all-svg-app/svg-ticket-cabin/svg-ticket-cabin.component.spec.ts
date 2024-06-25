import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketCabinComponent } from './svg-ticket-cabin.component';

describe('SvgTicketCabinComponent', () => {
  let component: SvgTicketCabinComponent;
  let fixture: ComponentFixture<SvgTicketCabinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketCabinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketCabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
