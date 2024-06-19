import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-nubank',
  templateUrl: './svg-nubank.component.html',
  styleUrl: './svg-nubank.component.scss'
})
export class SvgNubankComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
