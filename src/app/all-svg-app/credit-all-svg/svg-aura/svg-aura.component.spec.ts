import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAuraComponent } from './svg-aura.component';

describe('SvgAuraComponent', () => {
  let component: SvgAuraComponent;
  let fixture: ComponentFixture<SvgAuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgAuraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgAuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
