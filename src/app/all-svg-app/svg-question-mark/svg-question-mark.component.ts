import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-question-mark',
  templateUrl: './svg-question-mark.component.html',
  styleUrl: './svg-question-mark.component.scss'
})
export class SvgQuestionMarkComponent {
  @Input() width: string = '32px';
  @Input() height: string = '32px';
  @Input() fill: string = '#fff';

  constructor(){
  }
}
