import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPersonalDataComponent } from './svg-personal-data.component';

describe('SvgPersonalDataComponent', () => {
  let component: SvgPersonalDataComponent;
  let fixture: ComponentFixture<SvgPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPersonalDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
