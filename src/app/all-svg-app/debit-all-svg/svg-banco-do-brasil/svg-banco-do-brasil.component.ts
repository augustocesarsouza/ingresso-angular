import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-banco-do-brasil',
  templateUrl: './svg-banco-do-brasil.component.html',
  styleUrl: './svg-banco-do-brasil.component.scss'
})
export class SvgBancoDoBrasilComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
