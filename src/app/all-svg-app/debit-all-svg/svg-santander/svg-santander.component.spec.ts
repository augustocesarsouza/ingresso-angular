import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSantanderComponent } from './svg-santander.component';

describe('SvgSantanderComponent', () => {
  let component: SvgSantanderComponent;
  let fixture: ComponentFixture<SvgSantanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgSantanderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgSantanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
