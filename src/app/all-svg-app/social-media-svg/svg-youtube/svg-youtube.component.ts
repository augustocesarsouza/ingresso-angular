import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-youtube',
  templateUrl: './svg-youtube.component.html',
  styleUrl: './svg-youtube.component.scss'
})
export class SvgYoutubeComponent {
  @Input() width: string = "15px";
  @Input() height: string = "15px";

  constructor(){
  }
}
