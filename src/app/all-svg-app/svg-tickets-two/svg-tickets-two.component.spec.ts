import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketsTwoComponent } from './svg-tickets-two.component';

describe('SvgTicketsTwoComponent', () => {
  let component: SvgTicketsTwoComponent;
  let fixture: ComponentFixture<SvgTicketsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketsTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
