import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-blocked',
  templateUrl: './svg-blocked.component.html',
  styleUrl: './svg-blocked.component.scss'
})
export class SvgBlockedComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
