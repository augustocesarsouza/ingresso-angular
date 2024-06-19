import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-linckedin',
  templateUrl: './svg-linckedin.component.html',
  styleUrl: './svg-linckedin.component.scss'
})
export class SvgLinckedinComponent {
  @Input() width: string = "15px";
  @Input() height: string = "15px";

  constructor(){
  }
}
