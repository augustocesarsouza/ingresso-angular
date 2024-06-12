import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-ingresso',
  templateUrl: './svg-ingresso.component.html',
  styleUrl: './svg-ingresso.component.scss'
})
export class SvgIngressoComponent {
  @Input() width: string = '158px';
  @Input() height: string = '40px';

  constructor(){
  }
}
