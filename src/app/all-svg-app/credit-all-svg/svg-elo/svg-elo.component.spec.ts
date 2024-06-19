import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEloComponent } from './svg-elo.component';

describe('SvgEloComponent', () => {
  let component: SvgEloComponent;
  let fixture: ComponentFixture<SvgEloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgEloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgEloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
