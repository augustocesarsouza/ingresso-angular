import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-eua',
  templateUrl: './svg-eua.component.html',
  styleUrl: './svg-eua.component.scss'
})
export class SvgEuaComponent {
  @Input() width: string = '40px';
  @Input() height: string = '40px';

  constructor(){
  }
}
