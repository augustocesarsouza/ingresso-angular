import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class FormValidations {
  static equalsTo(otherField: string){
    const validator = (formControl: AbstractControl) => {
      if(formControl instanceof FormControl){
        if(otherField == null){
          throw new Error('É necessário informar um campo.');
        }

        if(!formControl.root || !(<FormGroup>formControl.root).controls){
          return null;
        }

        const field = (<FormGroup>formControl.root.get(otherField));

        if(!field){
          throw new Error('É necessário informar um campo valido');
        }

        if(field.value !== formControl.value){
          return { equalsTo: otherField };
        }

        return null;
      }
      throw new Error('formControl is not an instance of formControl');
    }

    return validator;
  }

  static cepValidator(control: FormControl){
    let cep = control.value;

    if(cep === null || cep === undefined) return;


    cep = cep.replace(/\D/g, '');

    if(cep && cep !== ''){
      let validacep = /^[0-9]{8}$/;

      return validacep.test(cep) ? null : { cepInvalido: true };
    }

    return null;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){
    const config: { [key: string]: string } = {
      'required': `${fieldName} é obrigatorio.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres`,
      'cepInvalido': 'CEP inválido'
    };

    return config[validatorName];
  }
}