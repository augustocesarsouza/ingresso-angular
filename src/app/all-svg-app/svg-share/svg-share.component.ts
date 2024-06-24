import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-share',
  templateUrl: './svg-share.component.html',
  styleUrl: './svg-share.component.scss'
})
export class SvgShareComponent {
  @Input() width: string = '15px';
  @Input() height: string = '15px';

  constructor(){
  }
}
