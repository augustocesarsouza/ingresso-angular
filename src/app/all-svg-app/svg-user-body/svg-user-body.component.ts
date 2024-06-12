import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-user-body',
  templateUrl: './svg-user-body.component.html',
  styleUrl: './svg-user-body.component.scss'
})
export class SvgUserBodyComponent {
  @Input() fillColor: string = 'currentColor';
}
