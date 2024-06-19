import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHipercardComponent } from './svg-hipercard.component';

describe('SvgHipercardComponent', () => {
  let component: SvgHipercardComponent;
  let fixture: ComponentFixture<SvgHipercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgHipercardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgHipercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
