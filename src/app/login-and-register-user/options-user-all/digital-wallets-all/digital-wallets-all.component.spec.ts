import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalWalletsAllComponent } from './digital-wallets-all.component';

describe('DigitalWalletsAllComponent', () => {
  let component: DigitalWalletsAllComponent;
  let fixture: ComponentFixture<DigitalWalletsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalWalletsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalWalletsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
