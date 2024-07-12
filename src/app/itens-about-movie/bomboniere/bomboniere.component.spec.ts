import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomboniereComponent } from './bomboniere.component';

describe('BomboniereComponent', () => {
  let component: BomboniereComponent;
  let fixture: ComponentFixture<BomboniereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BomboniereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BomboniereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
