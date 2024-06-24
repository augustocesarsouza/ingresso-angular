import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDetailsComponent } from './svg-details.component';

describe('SvgDetailsComponent', () => {
  let component: SvgDetailsComponent;
  let fixture: ComponentFixture<SvgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
