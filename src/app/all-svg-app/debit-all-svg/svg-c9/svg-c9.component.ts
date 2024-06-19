import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-c9',
  templateUrl: './svg-c9.component.html',
  styleUrl: './svg-c9.component.scss'
})
export class SvgC9Component {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
