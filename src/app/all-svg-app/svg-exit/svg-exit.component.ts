import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-exit',
  templateUrl: './svg-exit.component.html',
  styleUrl: './svg-exit.component.scss'
})
export class SvgExitComponent {
  @Input() width: string = '25px';
  @Input() height: string = '25px';
  @Input() fill: string = '#fff';

  constructor(){
  }
}
