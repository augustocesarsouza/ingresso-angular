import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgNextComponent } from './svg-next.component';

describe('SvgNextComponent', () => {
  let component: SvgNextComponent;
  let fixture: ComponentFixture<SvgNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgNextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
