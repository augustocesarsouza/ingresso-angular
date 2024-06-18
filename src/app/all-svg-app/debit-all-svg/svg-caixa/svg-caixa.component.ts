import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-caixa',
  templateUrl: './svg-caixa.component.html',
  styleUrl: './svg-caixa.component.scss'
})
export class SvgCaixaComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
