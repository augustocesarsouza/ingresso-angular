import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-trashcan',
  templateUrl: './svg-trashcan.component.html',
  styleUrl: './svg-trashcan.component.scss'
})
export class SvgTrashcanComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
  @Input() fill: string = 'rgb(52 60 70)';

  constructor(){
  }
}
