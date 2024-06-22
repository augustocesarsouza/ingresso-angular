import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-heart',
  templateUrl: './svg-heart.component.html',
  styleUrl: './svg-heart.component.scss'
})
export class SvgHeartComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() fill: string = 'red';

  constructor(){
  }
}
