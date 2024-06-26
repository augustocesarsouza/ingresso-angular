import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-user',
  templateUrl: './svg-user.component.html'
})
export class SvgUserComponent {
  @Input() width: string = '35px';
  @Input() height: string = '35px';
  @Input() fillColor: string = '#fff';
}
