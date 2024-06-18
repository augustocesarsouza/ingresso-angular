import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-paypal',
  templateUrl: './svg-paypal.component.html',
  styleUrl: './svg-paypal.component.scss'
})
export class SvgPaypalComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
