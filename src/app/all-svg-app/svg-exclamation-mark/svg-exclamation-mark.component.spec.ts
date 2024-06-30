import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgExclamationMarkComponent } from './svg-exclamation-mark.component';

describe('SvgExclamationMarkComponent', () => {
  let component: SvgExclamationMarkComponent;
  let fixture: ComponentFixture<SvgExclamationMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgExclamationMarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgExclamationMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
