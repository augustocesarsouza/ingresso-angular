import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgYoutubeComponent } from './svg-youtube.component';

describe('SvgYoutubeComponent', () => {
  let component: SvgYoutubeComponent;
  let fixture: ComponentFixture<SvgYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgYoutubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
