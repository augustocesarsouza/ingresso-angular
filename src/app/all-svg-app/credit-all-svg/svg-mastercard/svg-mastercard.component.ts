import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-mastercard',
  templateUrl: './svg-mastercard.component.html',
  styleUrl: './svg-mastercard.component.scss'
})
export class SvgMastercardComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
