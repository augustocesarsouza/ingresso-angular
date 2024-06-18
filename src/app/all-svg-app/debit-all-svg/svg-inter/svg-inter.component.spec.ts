import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgInterComponent } from './svg-inter.component';

describe('SvgInterComponent', () => {
  let component: SvgInterComponent;
  let fixture: ComponentFixture<SvgInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgInterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
