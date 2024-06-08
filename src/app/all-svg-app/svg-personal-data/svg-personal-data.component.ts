import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-personal-data',
  templateUrl: './svg-personal-data.component.html',
  styleUrl: './svg-personal-data.component.scss'
})
export class SvgPersonalDataComponent {
  @Input() width: string = '30px';
  @Input() height: string = '30px';
  @Input() fillColor: string = 'currentColor';

  constructor(){
  }
}
