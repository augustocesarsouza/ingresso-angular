import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgStarBeClientComponent } from './svg-star-be-client.component';

describe('SvgStarBeClientComponent', () => {
  let component: SvgStarBeClientComponent;
  let fixture: ComponentFixture<SvgStarBeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgStarBeClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgStarBeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
