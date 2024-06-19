import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-hipercard',
  templateUrl: './svg-hipercard.component.html',
  styleUrl: './svg-hipercard.component.scss'
})
export class SvgHipercardComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
