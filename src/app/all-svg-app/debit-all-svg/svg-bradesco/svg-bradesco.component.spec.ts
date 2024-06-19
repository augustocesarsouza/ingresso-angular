import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBradescoComponent } from './svg-bradesco.component';

describe('SvgBradescoComponent', () => {
  let component: SvgBradescoComponent;
  let fixture: ComponentFixture<SvgBradescoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgBradescoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBradescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
