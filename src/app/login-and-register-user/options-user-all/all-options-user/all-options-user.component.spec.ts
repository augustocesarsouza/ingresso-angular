import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOptionsUserComponent } from './all-options-user.component';

describe('AllOptionsUserComponent', () => {
  let component: AllOptionsUserComponent;
  let fixture: ComponentFixture<AllOptionsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllOptionsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllOptionsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
