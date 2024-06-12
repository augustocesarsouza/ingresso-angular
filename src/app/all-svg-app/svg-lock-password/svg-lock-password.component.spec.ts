import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLockPasswordComponent } from './svg-lock-password.component';

describe('SvgLockPasswordComponent', () => {
  let component: SvgLockPasswordComponent;
  let fixture: ComponentFixture<SvgLockPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLockPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLockPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
