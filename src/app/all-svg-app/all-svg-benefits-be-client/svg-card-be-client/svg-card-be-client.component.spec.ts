import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCardBeClientComponent } from './svg-card-be-client.component';

describe('SvgCardBeClientComponent', () => {
  let component: SvgCardBeClientComponent;
  let fixture: ComponentFixture<SvgCardBeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgCardBeClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCardBeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
