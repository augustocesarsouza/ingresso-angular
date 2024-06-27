import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-popcorn',
  templateUrl: './svg-popcorn.component.html',
  styleUrl: './svg-popcorn.component.scss'
})
export class SvgPopcornComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
