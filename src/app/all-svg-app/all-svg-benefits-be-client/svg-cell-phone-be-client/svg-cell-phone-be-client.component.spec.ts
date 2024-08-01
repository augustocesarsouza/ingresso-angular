import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCellPhoneBeClientComponent } from './svg-cell-phone-be-client.component';

describe('SvgCellPhoneBeClientComponent', () => {
  let component: SvgCellPhoneBeClientComponent;
  let fixture: ComponentFixture<SvgCellPhoneBeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgCellPhoneBeClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCellPhoneBeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
