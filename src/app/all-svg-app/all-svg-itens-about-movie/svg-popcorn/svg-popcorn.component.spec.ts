import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPopcornComponent } from './svg-popcorn.component';

describe('SvgPopcornComponent', () => {
  let component: SvgPopcornComponent;
  let fixture: ComponentFixture<SvgPopcornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgPopcornComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPopcornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
