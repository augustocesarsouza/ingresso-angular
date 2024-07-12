import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichPositionChooseComponent } from './which-position-choose.component';

describe('WhichPositionChooseComponent', () => {
  let component: WhichPositionChooseComponent;
  let fixture: ComponentFixture<WhichPositionChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhichPositionChooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhichPositionChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
