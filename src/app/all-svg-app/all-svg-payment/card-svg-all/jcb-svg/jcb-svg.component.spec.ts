import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcbSvgComponent } from './jcb-svg.component';

describe('JcbSvgComponent', () => {
  let component: JcbSvgComponent;
  let fixture: ComponentFixture<JcbSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JcbSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JcbSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
