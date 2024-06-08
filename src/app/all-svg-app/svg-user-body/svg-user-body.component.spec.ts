import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUserBodyComponent } from './svg-user-body.component';

describe('SvgUserBodyComponent', () => {
  let component: SvgUserBodyComponent;
  let fixture: ComponentFixture<SvgUserBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgUserBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgUserBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
