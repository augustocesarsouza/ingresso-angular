import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOrProgressFooterComponent } from './back-or-progress-footer.component';

describe('BackOrProgressFooterComponent', () => {
  let component: BackOrProgressFooterComponent;
  let fixture: ComponentFixture<BackOrProgressFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackOrProgressFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackOrProgressFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
