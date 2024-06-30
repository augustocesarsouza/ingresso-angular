import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTrashcanComponent } from './svg-trashcan.component';

describe('SvgTrashcanComponent', () => {
  let component: SvgTrashcanComponent;
  let fixture: ComponentFixture<SvgTrashcanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgTrashcanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTrashcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
