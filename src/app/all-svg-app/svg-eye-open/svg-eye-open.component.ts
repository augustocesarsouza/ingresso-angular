import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-eye-open',
  templateUrl: './svg-eye-open.component.html',
  styleUrl: './svg-eye-open.component.scss'
})
export class SvgEyeOpenComponent {
  @Input() width: string = '25px';
  @Input() height: string = '25px';
  @Input() fill: string = '#fff';

  constructor(){
  }
}
