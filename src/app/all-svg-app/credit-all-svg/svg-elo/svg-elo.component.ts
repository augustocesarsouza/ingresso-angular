import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-elo',
  templateUrl: './svg-elo.component.html',
  styleUrl: './svg-elo.component.scss'
})
export class SvgEloComponent {
  @Input() width: string = "40px";
  @Input() height: string = "30px";

  constructor(){
  }
}
