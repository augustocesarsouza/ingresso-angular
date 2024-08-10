import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-part-to-checkout-login',
  templateUrl: './header-part-to-checkout-login.component.html',
  styleUrl: './header-part-to-checkout-login.component.scss'
})
export class HeaderPartToCheckoutLoginComponent implements OnInit, AfterViewInit {
  @Input() showInsertCpfOrEmail!: boolean;
  @Input() AccountExist!: boolean;
  @Input() alreadyClickedContinue!: boolean;
  @Input() clickTroubleLoggingIn!: boolean;
  @Input() clickCreateNewAccount!: boolean;
  @Input() showStep2CreateAccount!: boolean;
  @Input() onClickContainerSvgArrowPayment!: () => void;
  @Input() onClickContainerSvgArrowTroubleLogging!: () => void;
  @Input() onClickContainerSvgArrowCreateAccount!: () => void;
  @Input() onClickContainerSvgArrowStep2CreateAccount!: () => void;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
