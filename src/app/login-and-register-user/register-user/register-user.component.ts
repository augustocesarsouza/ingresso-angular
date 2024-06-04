import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidations } from '../form-validations';
import { distinctUntilChanged, map, switchMap } from 'rxjs';
import { Estados } from '../models/estados-br.model';
import { DropdownService } from '../services/dropdown.service';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { Cidade } from '../models/cidade';
import { VerificaEmailService } from '../services/verifica-email.service';
import { Router } from '@angular/router';

interface CEP {
  bairro: string,
  cep: string,
  complemento: string,
  ddd: string,
  gia: string,
  ibge: string,
  localidade: string,
  logradouro: string,
  siafi: string,
  uf: string
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent extends BaseFormComponent implements OnInit {
  estados!: Estados[];
  cidades!: Cidade[];
  birthdayMonth!: string[];
  days!: number[];
  years!: string[];
  gender!: string[];
  cepInvalid: boolean = false;
  passwordValue!: string;
  minimumOneLowercaseLetter = false;
  minimumOneUppercaseLetter = false;
  minimumOneNumber = false;
  minimumEightNumber = false;
  confirmEmailRegister = false;

  constructor(private formBuilder: FormBuilder, private dropdownService: DropdownService, private cepService: ConsultaCepService, private verificaEmailService: VerificaEmailService,
    private router: Router
  ){
    super();
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.minLength(5)]],
      cpf: [null, [Validators.required, Validators.minLength(3), Validators.minLength(5)]],
      senha: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: ['', [FormValidations.cepValidator]],
        numberCellphone: [''],
        birthdayMonth: [''],
        birthday: [''],
        gender: [''],
        yearOfBirth: [''],
        numero: [''],
        complemento: [''],
        referencia: [''],
        rua: [''],
        bairro: [''],
        cidade: [''],
        estado: [''],
      }),
      termos: [null, Validators.pattern('true')]
    });

    this.formulario.get('email')?.valueChanges.subscribe(() => {
      this.formulario.get('confirmarEmail')?.updateValueAndValidity();
    });

    this.formulario.get('endereco.cep')?.statusChanges
    .pipe(
      distinctUntilChanged(),
    )
    .subscribe(status => {
      if(status === 'VALID'){
        this.consultaCEP();
      }
    });

    this.formulario.get('endereco.estado')?.valueChanges
    .pipe(
      map(estado => this.estados.filter(e => e.sigla === estado)),
      map(estados => estados && estados.length > 0 ? estados[0].id : 0),
      switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId))
    )
    .subscribe(cidades => this.cidades = cidades);

    this.birthdayMonth = ["Janeiro", "Feveiro", "Março", "Abril", 
    "Maio", "Junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    this.gender = ["Feminino", "Masculino"];

    const startYear = 1900;
    const currentYear = new Date().getFullYear();

    this.years = Array.from(
      { length: currentYear - startYear + 1 },
      (_, i) => (startYear + i).toString()
    );

    if(typeof navigator !== 'undefined'){
      import('inputmask').then(Inputmask => {
        let inputNumberHome = document.getElementById('input-number-home');
        let inputCepHome = document.getElementById('input-cep-home');
        let inputCellPhone = document.getElementById('input-number-cellphone');

        if (inputNumberHome) {
          let im = new Inputmask.default("");
          im.mask(inputNumberHome);
        }

        if (inputCepHome) {
          let im = new Inputmask.default("99999-999");
          im.mask(inputCepHome);
        }

        if(inputCellPhone){
          let im = new Inputmask.default("(99) 99999-9999");
          im.mask(inputCellPhone);
        }
      })
    }

    this.dropdownService.getEstadosBr()
    .subscribe(dados => this.estados = dados);

    if(document){
      document.body.style.position = 'relative';
    }
  }

  // onClickSubmit(){
  //   this.router.navigate(['/my-account/confirmation-of-email'], { queryParams: { token: "seila" } });
  // }

  async consultaCEP () {
    let cepName: string = this.formulario.get('endereco.cep')?.value;

    this.resetaDadosForm();

    let json = await this.cepService.consultaCEP(cepName);

    if(json){
      if(json.erro){
        this.cepInvalid = true;
      }else {
        this.populaDadosForm(json);
      }
    }else {
      this.cepInvalid = true;
    }
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        complement: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    });
  }

  onClickSubmit(){
    this.confirmEmailRegister = true;
  }

  async submit(){
    let valueSubmit = Object.assign({}, this.formulario.value);

    // valueSubmit = Object.assign(valueSubmit, { // isso aqui é formulario encadeados varios e só quero mandar para o banco os que está true
    //   frameworks: valueSubmit.frameworks
    //   .map((v: boolean, i: number) => v ? this.frameworks[i] : null)
    //   .filter((v: any) => v !== null)
    // });

    let objCreate = {};

    if(valueSubmit.endereco.birthdayMonth.length > 0 && valueSubmit.endereco.birthday.length > 0 && valueSubmit.endereco.yearOfBirth.length > 0){
      let numberMonth = this.birthdayMonth.indexOf(valueSubmit.endereco.birthdayMonth) + 1;

      let dataFull = "";
      
      if(valueSubmit.endereco.birthday.length < 2){
        dataFull += `0${valueSubmit.endereco.birthday}`;
      }else {
        dataFull += `${valueSubmit.endereco.birthday}`;
      }

      if(String(numberMonth).length < 2){
        dataFull += `/0${numberMonth}`;
      }else {
        dataFull += `/${numberMonth}`;
      }

      dataFull += `/${valueSubmit.endereco.yearOfBirth}`;

      objCreate = {
        name: valueSubmit.nome,
        email: valueSubmit.email,
        cpf: valueSubmit.cpf,
        password: valueSubmit.senha, 
        birthDateString: dataFull,
        gender: valueSubmit.endereco.gender,
        phone: valueSubmit.endereco.numero,
        cep: valueSubmit.endereco.numero,
        logradouro: valueSubmit.endereco.rua,
        numero: valueSubmit.endereco.numberCellphone,
        complemento: valueSubmit.endereco.complemento,
        referencia: valueSubmit.endereco.referencia,
        bairro: valueSubmit.endereco.bairro,
        estado: valueSubmit.endereco.estado,
        cidade: valueSubmit.endereco.cidade
      }
    }else {
      objCreate = {
        name: valueSubmit.nome,
        email: valueSubmit.email,
        cpf: valueSubmit.cpf,
        password: valueSubmit.senha, 
        birthDateString: "",
        gender: valueSubmit.endereco.gender,
        phone: valueSubmit.endereco.numero,
        cep: valueSubmit.endereco.numero,
        logradouro: valueSubmit.endereco.rua,
        numero: valueSubmit.endereco.numberCellphone,
        complemento: valueSubmit.endereco.complemento,
        referencia: valueSubmit.endereco.referencia,
        bairro: valueSubmit.endereco.bairro,
        estado: valueSubmit.endereco.estado,
        cidade: valueSubmit.endereco.cidade
      }
    }
    
    if(this.formulario.valid){
      let valueForm = valueSubmit;

      await fetch("/api/v1/public/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(objCreate)
      })
      .then((res) => {
        this.confirmEmailRegister = true;
      })
      .catch((error) => console.error(error));
    }
  }

  validarEmail(formControl: FormControl){
    return this.verificaEmailService.verficiarEmail(formControl.value)
     .pipe(
        map((res) => res ? {emailInvalido: true} : null)
      );
  }

  populaDadosForm(data: CEP) {
    this.formulario.patchValue({
      endereco: {
        complemento: data.complemento,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      }
    });

    let result = this.formulario.get('nome');

    if(result){
      result.setValue('Augusto');
    }
  }

  keyPressCepInput(){
    this.cepInvalid = false;
  }

  verificarConfirmarEmailValid(value: string){
    let item = this.formulario.get(value);

    if(item){
      return item.hasError('equalsTo');
    }

    return false;
  }

  emailJaExiste(value: string){
    let item = this.formulario.get(value);

    if(item){
      return item.hasError('emailInvalido');
    }

    return false;
  }

  getAnyNameFieldForm(valuefield: string){
    let result = this.formulario.get(valuefield);

    if(result){
      return result as FormControl<any>;
    }

    throw new Error(`Form control ${valuefield} not found in the form group.`);
  }

  onMonthChange(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    if(selectedValue.length > 0){
      let monthIndex = this.birthdayMonth.indexOf(selectedValue) + 1;
      let year = new Date().getFullYear();
      let daysInMonth = new Date(year, monthIndex, 0).getDate();
      
      this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    }else {
      this.days = [];
    }
  }

  onPasswordInput(password: string): void {
    let formSenha = this.formulario.get('senha');
    
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasEightNumber = false;

    if(password.length > 0){
    
      for (let i = 0; i < password.length; i++) {
        const caracter = password[i];
    
        if (/[A-Z]/.test(caracter)) {
          hasUppercase = true;
        }
    
        if (/[a-z]/.test(caracter)) {
          hasLowercase = true;
        }
    
        if (/[0-9]/.test(caracter)) {
          hasNumber = true;
        }
    
        if (hasUppercase && hasLowercase && hasNumber) {
          break;
        }
      }
    }

    if(password.length >= 9){
      hasEightNumber = true;
    }

    this.minimumOneUppercaseLetter = hasUppercase;
    this.minimumOneLowercaseLetter = hasLowercase;
    this.minimumOneNumber = hasNumber;
    this.minimumEightNumber = hasEightNumber;

    if(!hasUppercase || !hasLowercase || !hasNumber || !hasEightNumber){
      if(formSenha){
        formSenha.setErrors({ invalid: true });
  
        // Marcar o controle como tocado e sujo para que os erros sejam exibidos na interface do usuário
        formSenha.markAsTouched();
        formSenha.markAsDirty();
      }
    }
  }
  
  onContinueRegister(){
    this.formulario.reset();
    this.router.navigate(['/my-account/login']);
  }
}
