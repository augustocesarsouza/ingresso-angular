import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-obese',
  templateUrl: './svg-obese.component.html',
  styleUrl: './svg-obese.component.scss'
})
export class SvgObeseComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
