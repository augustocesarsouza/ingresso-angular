import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-loupe-movie-theater',
  templateUrl: './svg-loupe-movie-theater.component.html',
  styleUrl: './svg-loupe-movie-theater.component.scss'
})
export class SvgLoupeMovieTheaterComponent {
  @Input() width: string = '28px';
  @Input() height: string = '28px';
  @Input() fill: string = 'blue';

  constructor(){
  }
}
