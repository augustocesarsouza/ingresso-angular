import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.scss'
})
export class ErrorMsgComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;

  constructor(){
  }

  ngOnInit() {
  }

  get errorMessage(){
    for(const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched){
          // TODO
          return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
