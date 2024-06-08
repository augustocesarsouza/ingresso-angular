import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgLocationComponent } from './svg-location/svg-location.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgUserComponent } from './svg-user/svg-user.component';
import { SvgLockComponent } from './svg-lock/svg-lock.component';
import { SvgIngressoComponent } from './svg-ingresso/svg-ingresso.component';
import { SvgUserBodyComponent } from './svg-user-body/svg-user-body.component';
import { SvgQuestionMarkComponent } from './svg-question-mark/svg-question-mark.component';
import { SvgTicketsComponent } from './svg-tickets/svg-tickets.component';
import { SvgTicketsTwoComponent } from './svg-tickets-two/svg-tickets-two.component';
import { SvgPersonalDataComponent } from './svg-personal-data/svg-personal-data.component';
import { SvgPaymentMethodsComponent } from './svg-payment-methods/svg-payment-methods.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent,
    SvgLockComponent,
    SvgIngressoComponent,
    SvgUserBodyComponent,
    SvgQuestionMarkComponent,
    SvgTicketsComponent,
    SvgTicketsTwoComponent,
    SvgPersonalDataComponent,
    SvgPaymentMethodsComponent,
  ],
  exports: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent,
    SvgLockComponent,
    SvgIngressoComponent,
    SvgUserBodyComponent,
    SvgQuestionMarkComponent,
    SvgTicketsComponent,
    SvgTicketsTwoComponent,
    SvgPersonalDataComponent,
    SvgPaymentMethodsComponent,
  ]
})
export class AllSvgAppModule { }
