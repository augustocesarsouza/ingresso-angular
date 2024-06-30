import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgObeseComponent } from './svg-obese.component';

describe('SvgObeseComponent', () => {
  let component: SvgObeseComponent;
  let fixture: ComponentFixture<SvgObeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgObeseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgObeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
