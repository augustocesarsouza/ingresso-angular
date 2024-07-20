import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinersClubSvgComponent } from './diners-club-svg.component';

describe('DinersClubSvgComponent', () => {
  let component: DinersClubSvgComponent;
  let fixture: ComponentFixture<DinersClubSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DinersClubSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DinersClubSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
