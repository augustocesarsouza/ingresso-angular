import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-less',
  templateUrl: './svg-less.component.html',
  styleUrl: './svg-less.component.scss'
})
export class SvgLessComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() fill: string = 'rgb(204, 204, 204)';

  constructor(){
  }
}
