import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIngressoComponent } from './svg-ingresso.component';

describe('SvgIngressoComponent', () => {
  let component: SvgIngressoComponent;
  let fixture: ComponentFixture<SvgIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgIngressoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
