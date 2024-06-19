import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-pay-google',
  templateUrl: './svg-pay-google.component.html',
  styleUrl: './svg-pay-google.component.scss'
})
export class SvgPayGoogleComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
