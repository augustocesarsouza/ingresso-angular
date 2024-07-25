import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-eye-cut',
  templateUrl: './svg-eye-cut.component.html',
  styleUrl: './svg-eye-cut.component.scss'
})
export class SvgEyeCutComponent {
  @Input() width: string = '25px';
  @Input() height: string = '25px';
  @Input() fill: string = '#fff';

  constructor(){
  }
}
