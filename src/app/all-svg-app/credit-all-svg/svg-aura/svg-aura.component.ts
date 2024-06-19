import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-aura',
  templateUrl: './svg-aura.component.html',
  styleUrl: './svg-aura.component.scss'
})
export class SvgAuraComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
