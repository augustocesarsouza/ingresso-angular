import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroSvgComponent } from './maestro-svg.component';

describe('MaestroSvgComponent', () => {
  let component: MaestroSvgComponent;
  let fixture: ComponentFixture<MaestroSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaestroSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaestroSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
