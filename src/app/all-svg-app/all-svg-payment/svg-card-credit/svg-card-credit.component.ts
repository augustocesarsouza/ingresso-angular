import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-card-credit',
  templateUrl: './svg-card-credit.component.html',
  styleUrl: './svg-card-credit.component.scss'
})
export class SvgCardCreditComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';

  constructor(){
  }
}
