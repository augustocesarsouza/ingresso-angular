import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-card-be-client',
  templateUrl: './svg-card-be-client.component.html',
  styleUrl: './svg-card-be-client.component.scss'
})
export class SvgCardBeClientComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
