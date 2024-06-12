import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTicketsComponent } from './svg-tickets.component';

describe('SvgTicketsComponent', () => {
  let component: SvgTicketsComponent;
  let fixture: ComponentFixture<SvgTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
