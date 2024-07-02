import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-more',
  templateUrl: './svg-more.component.html',
  styleUrl: './svg-more.component.scss'
})
export class SvgMoreComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() fill: string = 'rgb(152, 170, 236)';

  constructor(){
  }
}
