import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgQuestionMarkComponent } from './svg-question-mark.component';

describe('SvgQuestionMarkComponent', () => {
  let component: SvgQuestionMarkComponent;
  let fixture: ComponentFixture<SvgQuestionMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgQuestionMarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgQuestionMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
