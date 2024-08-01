import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEyeCutComponent } from './svg-eye-cut.component';

describe('SvgEyeCutComponent', () => {
  let component: SvgEyeCutComponent;
  let fixture: ComponentFixture<SvgEyeCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgEyeCutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgEyeCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
