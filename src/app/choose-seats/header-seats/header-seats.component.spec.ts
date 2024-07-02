import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeatsComponent } from './header-seats.component';

describe('HeaderSeatsComponent', () => {
  let component: HeaderSeatsComponent;
  let fixture: ComponentFixture<HeaderSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSeatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
