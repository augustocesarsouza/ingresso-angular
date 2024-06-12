import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-generic',
  templateUrl: './input-generic.component.html',
  styleUrl: './input-generic.component.scss'
})
export class InputGenericComponent {
  @Input() border: string = '1px solid rgb(197, 197, 197)';
  @Input() borderLeft: string = '4px solid rgb(197, 197, 197)';
  @Input() placeholder: string = '';
  clickInput: boolean = false;

  constructor(){
  }

  onClickInput(event: MouseEvent){
    let input = event.target as HTMLInputElement;
    input.style.paddingTop = "13px";
    input.placeholder = "";
    this.clickInput = true;
  }

  onBlurInput(event: FocusEvent){
    let input = event.target as HTMLInputElement;

    if(input.value.length <= 0){
      input.style.paddingTop = "0px";
      input.placeholder = this.placeholder;
      this.clickInput = false;
    }
  }
}
