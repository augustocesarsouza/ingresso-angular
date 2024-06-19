import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-pix',
  templateUrl: './svg-pix.component.html',
  styleUrl: './svg-pix.component.scss'
})
export class SvgPixComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
