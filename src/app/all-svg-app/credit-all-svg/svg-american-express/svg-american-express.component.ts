import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-american-express',
  templateUrl: './svg-american-express.component.html',
  styleUrl: './svg-american-express.component.scss'
})
export class SvgAmericanExpressComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
