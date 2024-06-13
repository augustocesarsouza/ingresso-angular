import { Component, OnDestroy, OnInit } from '@angular/core';
import { Estados } from '../../models/estados-br.model';
import { Cidade } from '../../models/cidade';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DropdownService } from '../../services/dropdown.service';
import { ConsultaCepService } from '../../services/consulta-cep.service';
import { BaseFormComponent } from '../../base-form/base-form.component';
import { distinctUntilChanged, map, switchMap } from 'rxjs';
import { FormValidations } from '../../form-validations';
import { CEP } from '../../register-user/register-user.component';
import { GetUserInformationService } from '../../services/get-user-information.service';
import { User } from '../../user-interface/user-date';
import { Router } from '@angular/router';

interface EnderecoForm {
  bairro: string;
  birthday: string;
  birthdayMonth: string;
  cep: string;
  cidade:string;
  complemento: string;
  estado: string;
  gender: string;
  numberCellphone: string;
  numero: string;
  referencia: string;
  rua: string;
  yearOfBirth: string;
}

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent extends BaseFormComponent implements OnInit, OnDestroy {
  numberDiv: number = 2;

  estados!: Estados[];
  cidades!: Cidade[];
  birthdayMonth!: string[];
  days!: number[];
  years!: string[];
  gender!: string[];
  cepInvalid: boolean = false;
  accountUpdatedSucessfully = false;
  userDateStorage: User | null = null;
  valueContainerIsValid = false;
  passwordwrong = false;
  firstRenderOrders = 0;
  containerInputPassword!: HTMLElement;
  buttonSave!: HTMLButtonElement;
  private timeoutIdContainerAndSvgRed: any;
  private timeoutIdButtonSave: any;
  changePasswordUser = false;

  constructor(private formBuilder: FormBuilder, private dropdownService: DropdownService, private cepService: ConsultaCepService,
    private getUserInformationService: GetUserInformationService, private router: Router
  ){
    super();
  }

  ngOnInit(): void {
    this.changePassword = this.changePassword.bind(this);

    this.formulario = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(3), Validators.minLength(5)]],

      endereco: this.formBuilder.group({
        cep: ['', [FormValidations.cepValidator]],
        numberCellphone: [''],
        birthdayMonth: [''],
        birthday: [''],
        yearOfBirth: [''],
        gender: [''],
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
        if(this.firstRenderOrders > 0){
          this.consultaCEP();
        }
        this.firstRenderOrders++;
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

    let userDateStorage = null;

    if(typeof window !== "undefined"){
      userDateStorage = localStorage.getItem("userLogin");
    }

    if(userDateStorage && typeof userDateStorage === "string"){
      userDateStorage = JSON.parse(userDateStorage);
      this.userDateStorage = userDateStorage;
    }

    this.dropdownService.getEstadosBr()
    .subscribe(dados => this.estados = dados);

    this.getUserInformationService.getInfoUser()
    .subscribe({
      next: (date: any) => {
        let userDate = date.data;

        let birthDate: string = userDate.birthDate;
        let firstPart = birthDate.split("T")[0].split("-");
        let monthNumber = Number(firstPart[1]);
        let dayBirthday = firstPart[2];
        let yearBirthday = firstPart[0];

        let monthNameFull = this.birthdayMonth[monthNumber - 1];

        this.formulario.get("nome")?.setValue(userDateStorage.name);

        this.formulario.get("endereco.cep")?.setValue(userDate.cep);
        this.formulario.get("endereco.birthdayMonth")?.setValue(monthNameFull);

        this.colocarValorDiasApartirDoMesAniversario(monthNameFull);

        this.formulario.get("endereco.birthday")?.setValue(dayBirthday.replace("0", ""));
        this.formulario.get("endereco.yearOfBirth")?.setValue(yearBirthday);
        this.formulario.get("endereco.gender")?.setValue(userDate.gender);
        this.formulario.get("endereco.numero")?.setValue(userDate.numero);
        this.formulario.get("endereco.complemento")?.setValue(userDate.complemento);
        this.formulario.get("endereco.referencia")?.setValue(userDate.referencia);
        this.formulario.get("endereco.rua")?.setValue(userDate.logradouro);
        this.formulario.get("endereco.bairro")?.setValue(userDate.bairro);
        this.formulario.get("endereco.cidade")?.setValue(userDate.cidade);
        this.formulario.get("endereco.estado")?.setValue(userDate.estado);
      },
      error: error => {
        this.throwError403Forbidden(error);
      }
    });

    this.timeoutIdContainerAndSvgRed = setTimeout(() => {
      if(typeof document !== "undefined"){
        this.containerInputPassword = document.querySelector(".container-input-password") as HTMLElement;
      }
      if(this.containerInputPassword){
        this.containerInputPassword.style.borderColor = "rgb(218, 71, 66)";

      }
    }, 10);

    if(typeof document !== "undefined"){
      this.timeoutIdButtonSave = setTimeout(() => {
        this.buttonSave = document.querySelector(".button-save") as HTMLButtonElement;
      }, 10);
    }
  }

  override submit() {
    let valueName = this.formulario.get("nome");
    let nameUser = this.userDateStorage?.name;
    let inputPassword!: HTMLInputElement;
    if(typeof document !== "undefined"){
      inputPassword = document.querySelector(".input-password") as HTMLInputElement;
    }
    let senhaAtual = inputPassword.value;

    let endereco: EnderecoForm = this.formulario.value.endereco;

    let dayBirthday = endereco.birthday;
    let numberMonth = this.birthdayMonth.indexOf(endereco.birthdayMonth) + 1;

    if(dayBirthday.length <= 1){
      dayBirthday = `0${dayBirthday}`;
    }

    let birthDateFull = `${dayBirthday}/${numberMonth}/${endereco.yearOfBirth}`;

    let additionalInfoUserToUpdate = {
      userId: this.userDateStorage?.id,
      cpfOrEmail: this.userDateStorage?.email,
      birthDateString: birthDateFull,
      gender: endereco.gender,
      phone: endereco.numberCellphone,
      cep: endereco.cep,
      logradouro: endereco.rua,
      numero: endereco.numero,
      complemento: endereco.complemento,
      referencia: endereco.referencia,
      bairro: endereco.bairro,
      estado: endereco.estado,
      cidade: endereco.cidade,
    }

    if(valueName && valueName.value === nameUser){
      this.getUserInformationService.updateInfoAdditionalInfoUser(additionalInfoUserToUpdate, senhaAtual)
      .subscribe({
        next: (data: any) => {
          console.log(data);

        },
        error: (error: any) => {
          if(error.status === 401){
            this.passwordwrong = true;
            this.containerInputPassword.style.borderColor = "rgb(218, 71, 66)";
          }

          this.throwError403Forbidden(error);
        }
      });
    }else if (valueName && valueName.value !== nameUser) {
      let userUpdate = {
        id: this.userDateStorage?.id,
        name: valueName.value
      }

      this.getUserInformationService.updateNameUser(userUpdate, senhaAtual)
      .subscribe({
        next: (res: any) => {
          if(this.userDateStorage){
            this.userDateStorage.name = res.data.name;
          }

          this.formulario.get("nome")?.setValue(this.userDateStorage?.name);

          if(typeof window !== "undefined"){
            localStorage.removeItem("userLogin");
            localStorage.setItem("userLogin", JSON.stringify(this.userDateStorage));
          }

          this.accountUpdatedSucessfully = true;
        },
        error: (error: any) => {
          if(error.status === 401){
            this.passwordwrong = true;
          }

          this.throwError403Forbidden(error);
        }
      });
    }
  }

  async consultaCEP () {
    let cepName: string = this.formulario.get('endereco.cep')?.value;

    if(cepName.length <= 0)
      return;

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
      this.colocarValorDiasApartirDoMesAniversario(selectedValue);
    }else {
      this.days = [];
    }
  }

  colocarValorDiasApartirDoMesAniversario(mes: string){
    let monthIndex = this.birthdayMonth.indexOf(mes) + 1;
    let year = new Date().getFullYear();
    let daysInMonth = new Date(year, monthIndex, 0).getDate();

    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  keyPressCepInput(){
    this.cepInvalid = false;
  }

  onClickWhichDivWasClicked(numberDiv: number){
    this.numberDiv = numberDiv;
  }

  onClickCloseModal(){
    this.accountUpdatedSucessfully = false;
  }

  onClickHomePage(){
    this.router.navigate(['/']);
  }

  onClickSvgIngresso(){
    this.router.navigate(['/']);
  }

  onClickInputPassword(){
    this.passwordwrong = false;

    if(typeof document !== "undefined" && this.containerInputPassword !== null){
      let span = this.containerInputPassword?.firstChild as HTMLElement;
      let input = this.containerInputPassword?.lastChild as HTMLInputElement;

      span.style.left = "11px";
      span.style.top = "3px";
      span.style.fontSize = "12px";

      if(input.value.length > 0){
        this.containerInputPassword.style.borderColor = "rgb(22 135 225)";
      }
      this.containerInputPassword.style.padding = "4px 10px";
      input.style.paddingTop = "15px";
    }
  }

  onBlurPassword(){
    if(typeof document !== "undefined" && this.containerInputPassword !== null){
      let span = this.containerInputPassword?.firstChild as HTMLElement;
      let input = this.containerInputPassword?.lastChild as HTMLInputElement;

      if(input.value.length <= 0){
        span.style.left = "12px";
        span.style.top = "7px";
        span.style.fontSize = "14px";

        this.containerInputPassword.style.padding = "11px 10px";
        input.style.paddingTop = "0px";

        this.containerInputPassword.style.borderColor = "rgb(218, 71, 66)";
      }else {
        if(this.valueContainerIsValid){
          this.containerInputPassword.style.borderColor = "rgb(197, 197, 197)";
        }
      }
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    if(input.value.length <= 0){
      // const containerInputPassword = document.querySelector(".container-input-password") as HTMLElement;
      if(this.containerInputPassword){
        this.containerInputPassword.style.borderColor = "rgb(218, 71, 66)";
      }
      this.buttonSave.style.backgroundColor = "rgb(221, 221, 221)";
      this.buttonSave.style.border = "1px solid rgb(221, 221, 221)";
      this.buttonSave.style.pointerEvents = "none";

      this.valueContainerIsValid = false;
    }else {
      this.buttonSave.style.backgroundColor = "rgb(52, 120, 193)";
      this.buttonSave.style.border = "1px solid rgb(52, 120, 193)";
      this.buttonSave.style.pointerEvents = "painted";

      this.valueContainerIsValid = true;
      this.containerInputPassword.style.borderColor = "rgb(22, 135, 225)";
    }
  }

  throwError403Forbidden(status: any){
    if(status.status === 403){
      if(typeof window !== "undefined"){
        localStorage.removeItem("userLogin");
      }
      this.router.navigate(['/my-account/login']);
    }
  }

  changePassword(value: boolean){
    this.changePasswordUser = value;
  }

  ngOnDestroy(): void {
    if(this.timeoutIdContainerAndSvgRed){
      clearTimeout(this.timeoutIdContainerAndSvgRed);
    }

    if(this.timeoutIdButtonSave){
      clearTimeout(this.timeoutIdButtonSave);
    }
  }
}
