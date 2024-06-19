import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-facebook',
  templateUrl: './svg-facebook.component.html',
  styleUrl: './svg-facebook.component.scss'
})
export class SvgFacebookComponent {
  @Input() width: string = "15px";
  @Input() height: string = "15px";

  constructor(){
  }
}
