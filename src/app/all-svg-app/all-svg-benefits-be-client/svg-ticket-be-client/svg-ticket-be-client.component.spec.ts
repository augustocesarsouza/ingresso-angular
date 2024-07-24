import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketBeClientComponent } from './svg-ticket-be-client.component';

describe('SvgTicketBeClientComponent', () => {
  let component: SvgTicketBeClientComponent;
  let fixture: ComponentFixture<SvgTicketBeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketBeClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketBeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
