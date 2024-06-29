import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLessComponent } from './svg-less.component';

describe('SvgLessComponent', () => {
  let component: SvgLessComponent;
  let fixture: ComponentFixture<SvgLessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
