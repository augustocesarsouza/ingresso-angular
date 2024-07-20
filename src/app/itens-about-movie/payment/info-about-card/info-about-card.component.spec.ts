import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutCardComponent } from './info-about-card.component';

describe('InfoAboutCardComponent', () => {
  let component: InfoAboutCardComponent;
  let fixture: ComponentFixture<InfoAboutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoAboutCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAboutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
