import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEuaComponent } from './svg-eua.component';

describe('SvgEuaComponent', () => {
  let component: SvgEuaComponent;
  let fixture: ComponentFixture<SvgEuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgEuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgEuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
