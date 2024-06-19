import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-bradesco',
  templateUrl: './svg-bradesco.component.html',
  styleUrl: './svg-bradesco.component.scss'
})
export class SvgBradescoComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
