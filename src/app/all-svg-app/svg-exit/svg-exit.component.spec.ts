import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgExitComponent } from './svg-exit.component';

describe('SvgExitComponent', () => {
  let component: SvgExitComponent;
  let fixture: ComponentFixture<SvgExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgExitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
