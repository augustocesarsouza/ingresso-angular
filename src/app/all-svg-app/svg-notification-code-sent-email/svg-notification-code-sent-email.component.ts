import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-notification-code-sent-email',
  templateUrl: './svg-notification-code-sent-email.component.html',
  styleUrl: './svg-notification-code-sent-email.component.scss'
})
export class SvgNotificationCodeSentEmailComponent {
  @Input() width: string = '84px';
  @Input() height: string = '75px';
  @Input() fill: string = 'none';

  constructor(){
  }
}
