import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIngressoIComponent } from './svg-ingresso-i.component';

describe('SvgIngressoIComponent', () => {
  let component: SvgIngressoIComponent;
  let fixture: ComponentFixture<SvgIngressoIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgIngressoIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgIngressoIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
