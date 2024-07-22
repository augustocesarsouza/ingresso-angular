import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaSvgComponent } from './visa-svg.component';

describe('VisaSvgComponent', () => {
  let component: VisaSvgComponent;
  let fixture: ComponentFixture<VisaSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisaSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisaSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
