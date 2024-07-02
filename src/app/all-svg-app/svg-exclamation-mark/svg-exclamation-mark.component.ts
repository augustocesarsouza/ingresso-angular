import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-exclamation-mark',
  templateUrl: './svg-exclamation-mark.component.html',
  styleUrl: './svg-exclamation-mark.component.scss'
})
export class SvgExclamationMarkComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() fill: string = 'red';

  constructor(){
  }
}
