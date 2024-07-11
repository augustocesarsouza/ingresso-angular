import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketComponent } from './svg-ticket.component';

describe('SvgTicketComponent', () => {
  let component: SvgTicketComponent;
  let fixture: ComponentFixture<SvgTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
