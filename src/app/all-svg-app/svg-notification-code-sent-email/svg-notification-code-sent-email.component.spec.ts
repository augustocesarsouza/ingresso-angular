import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgNotificationCodeSentEmailComponent } from './svg-notification-code-sent-email.component';

describe('SvgNotificationCodeSentEmailComponent', () => {
  let component: SvgNotificationCodeSentEmailComponent;
  let fixture: ComponentFixture<SvgNotificationCodeSentEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgNotificationCodeSentEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgNotificationCodeSentEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
