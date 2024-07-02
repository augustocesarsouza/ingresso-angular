import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgWheelchairComponent } from './svg-wheelchair.component';

describe('SvgWheelchairComponent', () => {
  let component: SvgWheelchairComponent;
  let fixture: ComponentFixture<SvgWheelchairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgWheelchairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgWheelchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
