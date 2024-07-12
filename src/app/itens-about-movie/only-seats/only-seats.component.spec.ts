import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlySeatsComponent } from './only-seats.component';

describe('OnlySeatsComponent', () => {
  let component: OnlySeatsComponent;
  let fixture: ComponentFixture<OnlySeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlySeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlySeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
