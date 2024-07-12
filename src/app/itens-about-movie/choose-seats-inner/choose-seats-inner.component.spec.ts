import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseSeatsInnerComponent } from './choose-seats-inner.component';


describe('ChooseSeatsInnerComponent', () => {
  let component: ChooseSeatsInnerComponent;
  let fixture: ComponentFixture<ChooseSeatsInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseSeatsInnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseSeatsInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
