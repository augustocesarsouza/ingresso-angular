import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLinckedinComponent } from './svg-linckedin.component';

describe('SvgLinckedinComponent', () => {
  let component: SvgLinckedinComponent;
  let fixture: ComponentFixture<SvgLinckedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLinckedinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLinckedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
