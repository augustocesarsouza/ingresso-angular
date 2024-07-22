import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCardSvgComponent } from './master-card-svg.component';

describe('MasterCardSvgComponent', () => {
  let component: MasterCardSvgComponent;
  let fixture: ComponentFixture<MasterCardSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterCardSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterCardSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
