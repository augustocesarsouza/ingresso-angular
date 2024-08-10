import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSessionsAndInfoComponent } from './movie-sessions-and-info.component';

describe('MovieSessionsAndInfoComponent', () => {
  let component: MovieSessionsAndInfoComponent;
  let fixture: ComponentFixture<MovieSessionsAndInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieSessionsAndInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieSessionsAndInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
