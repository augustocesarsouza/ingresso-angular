import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-visa',
  templateUrl: './svg-visa.component.html',
  styleUrl: './svg-visa.component.scss'
})
export class SvgVisaComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
