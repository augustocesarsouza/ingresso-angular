import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketFullComponent } from './svg-ticket-full.component';

describe('SvgTicketFullComponent', () => {
  let component: SvgTicketFullComponent;
  let fixture: ComponentFixture<SvgTicketFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketFullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
