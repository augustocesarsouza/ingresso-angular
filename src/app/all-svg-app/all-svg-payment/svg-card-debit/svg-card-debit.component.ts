import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-card-debit',
  templateUrl: './svg-card-debit.component.html',
  styleUrl: './svg-card-debit.component.scss'
})
export class SvgCardDebitComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';

  constructor(){
  }
}
