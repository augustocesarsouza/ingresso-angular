import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent {
  formulario!: FormGroup;

  constructor(){
  }

  abstract submit(): any;

  onSubmit(){
    if (this.formulario.valid) {
      this.submit();
    }else {
      Object.keys(this.formulario.controls).forEach((campo) => {
        const controle = this.formulario.get(campo);
        if(controle){
          controle.markAllAsTouched();
          controle.markAsDirty();
        }
      });
    }
  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: string){
    let getCampo = this.formulario.get(campo);

    if(getCampo){
      return !getCampo.valid && getCampo.touched;
    }else {
      return false;
    }

    // if(campo.valid !== null && campo.touched !== null){
    //   return !campo.valid && campo.touched;
    // }else {
    //   return false;
    // }
  }

  verificarEmailInvalido(){
    let campoEmail = this.formulario.get('email');
    if(campoEmail && campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string){
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }
}
