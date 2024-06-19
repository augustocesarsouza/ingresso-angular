import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-pagbank',
  templateUrl: './svg-pagbank.component.html',
  styleUrl: './svg-pagbank.component.scss'
})
export class SvgPagbankComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
