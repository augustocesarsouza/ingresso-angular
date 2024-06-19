import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgNubankComponent } from './svg-nubank.component';

describe('SvgNubankComponent', () => {
  let component: SvgNubankComponent;
  let fixture: ComponentFixture<SvgNubankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgNubankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgNubankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
