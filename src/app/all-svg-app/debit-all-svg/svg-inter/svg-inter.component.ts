import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-inter',
  templateUrl: './svg-inter.component.html',
  styleUrl: './svg-inter.component.scss'
})
export class SvgInterComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
