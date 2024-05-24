import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationVariedComponent } from './navigation-varied.component';

describe('NavigationVariedComponent', () => {
  let component: NavigationVariedComponent;
  let fixture: ComponentFixture<NavigationVariedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationVariedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationVariedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
