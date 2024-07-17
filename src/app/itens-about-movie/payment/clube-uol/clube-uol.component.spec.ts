import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeUolComponent } from './clube-uol.component';

describe('ClubeUolComponent', () => {
  let component: ClubeUolComponent;
  let fixture: ComponentFixture<ClubeUolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubeUolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubeUolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
