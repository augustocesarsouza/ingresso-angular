import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIngressoComponent } from './footer-ingresso.component';

describe('FooterIngressoComponent', () => {
  let component: FooterIngressoComponent;
  let fixture: ComponentFixture<FooterIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterIngressoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
