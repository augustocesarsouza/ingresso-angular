import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-pay',
  templateUrl: './svg-pay.component.html',
  styleUrl: './svg-pay.component.scss'
})
export class SvgPayComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
