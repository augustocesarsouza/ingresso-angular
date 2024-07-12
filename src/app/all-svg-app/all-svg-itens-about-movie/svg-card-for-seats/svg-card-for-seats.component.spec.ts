import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCardForSeatsComponent } from './svg-card-for-seats.component';

describe('SvgCardForSeatsComponent', () => {
  let component: SvgCardForSeatsComponent;
  let fixture: ComponentFixture<SvgCardForSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgCardForSeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCardForSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
