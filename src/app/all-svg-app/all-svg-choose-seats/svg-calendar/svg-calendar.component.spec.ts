import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCalendarComponent } from './svg-calendar.component';

describe('SvgCalendarComponent', () => {
  let component: SvgCalendarComponent;
  let fixture: ComponentFixture<SvgCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
