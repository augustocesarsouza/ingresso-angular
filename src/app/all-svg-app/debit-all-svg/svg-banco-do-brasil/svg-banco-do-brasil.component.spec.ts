import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBancoDoBrasilComponent } from './svg-banco-do-brasil.component';

describe('SvgBancoDoBrasilComponent', () => {
  let component: SvgBancoDoBrasilComponent;
  let fixture: ComponentFixture<SvgBancoDoBrasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgBancoDoBrasilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBancoDoBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
