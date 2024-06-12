import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIComponent } from './svg-i.component';

describe('SvgIComponent', () => {
  let component: SvgIComponent;
  let fixture: ComponentFixture<SvgIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
