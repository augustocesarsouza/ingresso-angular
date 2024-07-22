import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPixComponent } from './svg-pix.component';

describe('SvgPixComponent', () => {
  let component: SvgPixComponent;
  let fixture: ComponentFixture<SvgPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
