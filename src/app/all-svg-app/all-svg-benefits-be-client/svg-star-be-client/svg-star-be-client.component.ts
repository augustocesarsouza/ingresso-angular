import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-star-be-client',
  templateUrl: './svg-star-be-client.component.html',
  styleUrl: './svg-star-be-client.component.scss'
})
export class SvgStarBeClientComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
