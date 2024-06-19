import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-itau',
  templateUrl: './svg-itau.component.html',
  styleUrl: './svg-itau.component.scss'
})
export class SvgItauComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
