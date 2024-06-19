import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-santander',
  templateUrl: './svg-santander.component.html',
  styleUrl: './svg-santander.component.scss'
})
export class SvgSantanderComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
