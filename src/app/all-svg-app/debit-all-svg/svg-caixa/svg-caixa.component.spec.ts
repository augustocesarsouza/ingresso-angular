import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCaixaComponent } from './svg-caixa.component';

describe('SvgCaixaComponent', () => {
  let component: SvgCaixaComponent;
  let fixture: ComponentFixture<SvgCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgCaixaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
