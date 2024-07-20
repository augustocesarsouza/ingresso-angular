import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloSvgComponent } from './elo-svg.component';

describe('EloSvgComponent', () => {
  let component: EloSvgComponent;
  let fixture: ComponentFixture<EloSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EloSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EloSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
