import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgItauComponent } from './svg-itau.component';

describe('SvgItauComponent', () => {
  let component: SvgItauComponent;
  let fixture: ComponentFixture<SvgItauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgItauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgItauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
