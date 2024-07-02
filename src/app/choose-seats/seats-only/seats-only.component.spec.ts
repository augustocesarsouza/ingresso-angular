import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsOnlyComponent } from './seats-only.component';

describe('SeatsOnlyComponent', () => {
  let component: SeatsOnlyComponent;
  let fixture: ComponentFixture<SeatsOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatsOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeatsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
