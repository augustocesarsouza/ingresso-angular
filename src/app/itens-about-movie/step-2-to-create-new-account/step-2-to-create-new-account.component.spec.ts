import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2ToCreateNewAccountComponent } from './step-2-to-create-new-account.component';

describe('Step2ToCreateNewAccountComponent', () => {
  let component: Step2ToCreateNewAccountComponent;
  let fixture: ComponentFixture<Step2ToCreateNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step2ToCreateNewAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Step2ToCreateNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
