import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoTopComponent } from './ingresso-top.component';

describe('IngressoTopComponent', () => {
  let component: IngressoTopComponent;
  let fixture: ComponentFixture<IngressoTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngressoTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngressoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
