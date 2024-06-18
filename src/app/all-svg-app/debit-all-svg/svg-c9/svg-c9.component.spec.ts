import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgC9Component } from './svg-c9.component';

describe('SvgC9Component', () => {
  let component: SvgC9Component;
  let fixture: ComponentFixture<SvgC9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgC9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgC9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
