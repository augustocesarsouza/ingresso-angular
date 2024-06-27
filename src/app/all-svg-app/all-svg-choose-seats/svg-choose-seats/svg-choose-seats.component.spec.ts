import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgChooseSeatsComponent } from './svg-choose-seats.component';

describe('SvgChooseSeatsComponent', () => {
  let component: SvgChooseSeatsComponent;
  let fixture: ComponentFixture<SvgChooseSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgChooseSeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgChooseSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
