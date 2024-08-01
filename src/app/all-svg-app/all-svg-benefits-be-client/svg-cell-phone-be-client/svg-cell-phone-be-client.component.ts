import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-cell-phone-be-client',
  templateUrl: './svg-cell-phone-be-client.component.html',
  styleUrl: './svg-cell-phone-be-client.component.scss'
})
export class SvgCellPhoneBeClientComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
