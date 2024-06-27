import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChooseSeatsComponent } from './body-choose-seats.component';

describe('BodyChooseSeatsComponent', () => {
  let component: BodyChooseSeatsComponent;
  let fixture: ComponentFixture<BodyChooseSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyChooseSeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyChooseSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
