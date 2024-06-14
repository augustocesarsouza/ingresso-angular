import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersCinemaComponent } from './my-orders-cinema.component';

describe('MyOrdersCinemaComponent', () => {
  let component: MyOrdersCinemaComponent;
  let fixture: ComponentFixture<MyOrdersCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyOrdersCinemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOrdersCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
