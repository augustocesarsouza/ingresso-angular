import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ColorsForSpan } from '../enum/colors-for-span';
import { Subscription } from 'rxjs';
import { CheckIfInfoUserAlreadyExsitsService } from '../service/check-if-info-user-already-exsits.service';

interface CheckExistsCpf {
  cpfExists: boolean;
}

@Component({
  selector: 'app-step-1-to-create-new-account',
  templateUrl: './step-1-to-create-new-account.component.html',
  styleUrl: './step-1-to-create-new-account.component.scss'
})
export class Step1ToCreateNewAccountComponent implements OnInit, AfterViewInit {
  subscriptions: Subscription[] = [];

  @Input() valueNomeInput!: string;
  @Input() changeValueValueNomeInput!: (value: string) => void;
  @Input() changeValueValuePhoneInput!: (value: string) => void;
  @Input() valuePhoneInputToSave!: string;
  @Input() changeValueValuePhoneInputToSave!: (value: string) => void;
  @Input() changeValueValueCpfInput!: (value: string) => void;

  @Input() valurCpfInput!: string;
  @Input() changeValueValurCpfInput!: (value: string) => void;

  @Input() changeValueShowStep2CreateAccount!: (value: boolean) => void;
  @Input() changeValueClickCreateNewAccount!: (value: boolean) => void;
  @Input() changeValueCpfNotExist!: (value: boolean) => void;
  @Input() cpfNotExist!: boolean;

  spanNomeErrorCreateNewAccount = false;
  spanPhoneErrorCreateNewAccount = false;
  spanCpfErrorCreateNewAccount = false;

  podeMandarParaBackandTestarCpf = false;
  showLoadingCicleToCreateAccount = false;

  settimeOutLoadingCicle: any;
  settimeOutSpanCpfNotExist: any;
  containerMainSvgInput!: HTMLElement;

  constructor(private check_if_info_user_already_exsits_service: CheckIfInfoUserAlreadyExsitsService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.containerMainSvgInput = document.querySelector('.container-cpf-or-email') as HTMLElement;
  }

  onInputNameCreateAccount(event: Event) {
    let input = event.target as HTMLInputElement;

    // this.valueNomeInput = input.value;
    this.changeValueValueNomeInput(input.value);
  }

  onClickContinueCreateAccount(buttonContinueCreateAccount: HTMLButtonElement, inputNomeCreateNewAccount: HTMLInputElement, inputCpfCreateNewAccount: HTMLInputElement,
    inputPhoneCreateNewAccount: HTMLInputElement, containerInputNomeCreateNewAccount:HTMLDivElement, containerInputPhoneCreateNewAccount: HTMLDivElement,
    containerInputCpfCreateNewAccount: HTMLDivElement){

    let valueNomeInput = inputNomeCreateNewAccount.value;
    let valuePhoneInput = inputPhoneCreateNewAccount.value;
    let valurCpfInput = inputCpfCreateNewAccount.value;

    let regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if(!regex.test(valurCpfInput)){
      containerInputCpfCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderRed;
      this.spanCpfErrorCreateNewAccount = true;
      this.podeMandarParaBackandTestarCpf = false;
    }

    if(valuePhoneInput.replace(/[_\.\-\(\)]/g, '').length < 11){
      containerInputPhoneCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderRed;
      this.spanPhoneErrorCreateNewAccount = true;
      this.podeMandarParaBackandTestarCpf = false;
    }

    if(valueNomeInput.length < 3 || valueNomeInput.includes("@")){
      containerInputNomeCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderRed;
      this.spanNomeErrorCreateNewAccount = true;
      this.podeMandarParaBackandTestarCpf = false;
    }

    if(regex.test(valurCpfInput) && valuePhoneInput.replace(/[_\.\-\(\)]/g, '').length >= 11 && valueNomeInput.length >= 3 && !valueNomeInput.includes("@")){
      this.podeMandarParaBackandTestarCpf = true;
    }

    if(!this.podeMandarParaBackandTestarCpf) return;
    if(this.showLoadingCicleToCreateAccount === true) return;

    this.changeValueValueNomeInput(valueNomeInput);
    this.changeValueValuePhoneInput(valuePhoneInput);
    this.changeValueValuePhoneInputToSave(valuePhoneInput);
    this.changeValueValurCpfInput(valurCpfInput);

    this.showLoadingCicleToCreateAccount = true;
    buttonContinueCreateAccount.style.backgroundImage = "linear-gradient(to left, rgb(102, 102, 102), rgb(102, 102, 102))";
    buttonContinueCreateAccount.style.color = "rgb(0 0 0)";

    clearTimeout(this.settimeOutLoadingCicle);
    clearTimeout(this.settimeOutSpanCpfNotExist);

    this.subscriptions.push(this.check_if_info_user_already_exsits_service.checkIfCpfAlreadyExists(valurCpfInput).subscribe((data: any) => {
      this.settimeOutLoadingCicle = setTimeout(() => {
        let result: CheckExistsCpf = data.data;

        this.showLoadingCicleToCreateAccount = false;
        this.changeValueCpfNotExist(result.cpfExists);

        if(result.cpfExists){
          this.settimeOutSpanCpfNotExist = setTimeout(() => {
            this.changeValueCpfNotExist(false);
          }, 3000);
        }

        if(!result.cpfExists){
          this.changeValueShowStep2CreateAccount(!result.cpfExists);
          containerInputCpfCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGreen;
          this.changeValueClickCreateNewAccount(false);
        }

        buttonContinueCreateAccount.style.backgroundImage = "linear-gradient(to left, #6c04ba, #3255e2)";
        buttonContinueCreateAccount.style.color = "rgb(255, 255, 255)";
      }, 2000);
    }));
  }

  onClickInputCreateAccount(inputCpfOrEmail: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputNomeCreateNewAccount: HTMLDivElement,
    containerInputPhoneCreateNewAccount: HTMLDivElement, containerInputCpfCreateNewAccount: HTMLDivElement
  ){
    this.spanNomeErrorCreateNewAccount = false;
    this.spanPhoneErrorCreateNewAccount = false;
    this.spanCpfErrorCreateNewAccount = false;

    containerInputNomeCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGrey;
    containerInputPhoneCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGrey;
    containerInputCpfCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGrey;

    if(spanNomeCreateNewAccount){
      spanNomeCreateNewAccount.style.display = 'block';

      containerInputNomeCreateNewAccount.style.padding = '2px 5px';

      containerInputNomeCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderBlue;

      // if(containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderGreen && containerInputNomeCreateNewAccount.style.borderColor !== this.colorBorderRed){
      //   containerInputNomeCreateNewAccount.style.borderColor = this.colorBorderBlue;
      // }
    }
  }

  onBlurInputCreateAccount(input: HTMLInputElement, spanNomeCreateNewAccount: HTMLSpanElement, containerInputNomeCreateNewAccount: HTMLDivElement){
    let valueInput = input.value;

    if(spanNomeCreateNewAccount){
      if(valueInput.length <= 0 || valueInput.replace(/[_\.\-\(\)]/g, '').length <= 0){
        spanNomeCreateNewAccount.style.display = 'none';
        containerInputNomeCreateNewAccount.style.padding = '10px 5px';
      }

      if(containerInputNomeCreateNewAccount.style.borderColor !== ColorsForSpan.colorBorderGreen && containerInputNomeCreateNewAccount.style.borderColor !== ColorsForSpan.colorBorderRed){
        containerInputNomeCreateNewAccount.style.borderColor = ColorsForSpan.colorBorderGrey;
      }
    }
  }

  onInputCpfCreateAccount(event: Event, containerInputCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;
    let valurInputCpf = input.value;

    this.changeValueValueCpfInput(valurInputCpf);

    if(valurInputCpf.length <= 0){
      this.containerMainSvgInput.style.borderColor = ColorsForSpan.colorBorderGrey;
    }
  }

  onInputPhoneCreateAccount(event: Event, containerInputCreateNewAccount: HTMLDivElement) {
    let input = event.target as HTMLInputElement;
    let valurInputPhone = input.value;

    this.changeValueValuePhoneInput(valurInputPhone);

    if(valurInputPhone.length <= 0){
      this.containerMainSvgInput.style.borderColor = ColorsForSpan.colorBorderGrey;
    }
  }
}
