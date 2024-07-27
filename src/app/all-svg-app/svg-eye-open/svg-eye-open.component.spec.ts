import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEyeOpenComponent } from './svg-eye-open.component';

describe('SvgEyeOpenComponent', () => {
  let component: SvgEyeOpenComponent;
  let fixture: ComponentFixture<SvgEyeOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgEyeOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgEyeOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
