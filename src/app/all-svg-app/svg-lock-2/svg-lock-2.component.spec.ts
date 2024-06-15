import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLock2Component } from './svg-lock-2.component';

describe('SvgLock2Component', () => {
  let component: SvgLock2Component;
  let fixture: ComponentFixture<SvgLock2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLock2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
