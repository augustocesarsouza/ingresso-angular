import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-google-play',
  templateUrl: './svg-google-play.component.html',
  styleUrl: './svg-google-play.component.scss'
})
export class SvgGooglePlayComponent {
  @Input() width: string = '60px';
  @Input() height: string = '40px';

  constructor(){
  }
}
