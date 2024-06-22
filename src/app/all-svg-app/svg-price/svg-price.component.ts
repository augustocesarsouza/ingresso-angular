import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-price',
  templateUrl: './svg-price.component.html',
  styleUrl: './svg-price.component.scss'
})
export class SvgPriceComponent {
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() fill: string = 'blue';

  constructor(){
  }
}
