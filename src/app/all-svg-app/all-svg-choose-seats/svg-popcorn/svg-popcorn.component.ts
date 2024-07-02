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
  @Input() border: string = '1px solid rgb(52, 60, 70)';
  @Input() borderRadius: string = '50%';
  @Input() padding: string = '4px';

  constructor(){
  }
}
