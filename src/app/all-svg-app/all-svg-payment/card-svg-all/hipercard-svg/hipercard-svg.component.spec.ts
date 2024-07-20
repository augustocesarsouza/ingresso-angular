import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipercardSvgComponent } from './hipercard-svg.component';

describe('HipercardSvgComponent', () => {
  let component: HipercardSvgComponent;
  let fixture: ComponentFixture<HipercardSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HipercardSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HipercardSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
