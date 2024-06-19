import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-next',
  templateUrl: './svg-next.component.html',
  styleUrl: './svg-next.component.scss'
})
export class SvgNextComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
