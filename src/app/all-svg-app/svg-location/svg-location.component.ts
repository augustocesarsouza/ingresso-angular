import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-location',
  templateUrl: './svg-location.component.html',
  styleUrl: '../svg-global-style.component.scss'
})
export class SvgLocationComponent {
  @Input() width: string = '25px';
  @Input() height: string = '25px';
  @Input() fill: string = '#fff';

  constructor(){
  }
}
