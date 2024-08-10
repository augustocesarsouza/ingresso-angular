import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1ToCreateNewAccountComponent } from './step-1-to-create-new-account.component';

describe('Step1ToCreateNewAccountComponent', () => {
  let component: Step1ToCreateNewAccountComponent;
  let fixture: ComponentFixture<Step1ToCreateNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step1ToCreateNewAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Step1ToCreateNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
