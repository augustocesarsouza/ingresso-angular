import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBlockedComponent } from './svg-blocked.component';

describe('SvgBlockedComponent', () => {
  let component: SvgBlockedComponent;
  let fixture: ComponentFixture<SvgBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgBlockedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
