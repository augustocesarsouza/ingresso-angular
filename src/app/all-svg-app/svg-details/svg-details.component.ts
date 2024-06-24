import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-details',
  templateUrl: './svg-details.component.html',
  styleUrl: './svg-details.component.scss'
})
export class SvgDetailsComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() fill: string = 'blue';

  constructor(){
  }
}
