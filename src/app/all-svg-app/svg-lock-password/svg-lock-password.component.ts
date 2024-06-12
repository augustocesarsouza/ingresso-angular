import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-lock-password',
  templateUrl: './svg-lock-password.component.html',
  styleUrl: './svg-lock-password.component.scss'
})
export class SvgLockPasswordComponent {
  @Input() width: string = '30px';
  // @Input() height: string = '30px';
  @Input() fillColor: string = 'currentColor';

  constructor(){
  }
}
