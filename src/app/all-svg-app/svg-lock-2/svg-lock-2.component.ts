import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-lock-2',
  templateUrl: './svg-lock-2.component.html',
  styleUrl: './svg-lock-2.component.scss'
})
export class SvgLock2Component {
  @Input() width: string = "100px";

  constructor(){
  }
}
