import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-instagram',
  templateUrl: './svg-instagram.component.html',
  styleUrl: './svg-instagram.component.scss'
})
export class SvgInstagramComponent {
  @Input() width: string = "15px";
  @Input() height: string = "15px";

  constructor(){
  }
}
