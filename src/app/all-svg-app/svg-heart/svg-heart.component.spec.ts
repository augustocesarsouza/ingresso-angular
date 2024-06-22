import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHeartComponent } from './svg-heart.component';

describe('SvgHeartComponent', () => {
  let component: SvgHeartComponent;
  let fixture: ComponentFixture<SvgHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgHeartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
