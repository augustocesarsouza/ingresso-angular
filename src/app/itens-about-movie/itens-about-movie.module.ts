import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ItensAboutMovieRoutingModule } from './itens-about-movie-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderSeatsComponent } from './header-seats/header-seats.component';
import { SeatsOnlyComponent } from './seats-only/seats-only.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { WarningAboutMovieTheaterComponent } from './warning-about-movie-theater/warning-about-movie-theater.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { TypeOfThePaymentComponent } from './type-of-the-payment/type-of-the-payment.component';
import { BackOrProgressFooterComponent } from './back-or-progress-footer/back-or-progress-footer.component';
import { OnlySeatsComponent } from './only-seats/only-seats.component';
import { BomboniereComponent } from './bomboniere/bomboniere.component';
import { BodyChooseSeatsComponent } from './body-choose-seats/body-choose-seats.component';
import { ChooseSeatsInnerComponent } from './choose-seats-inner/choose-seats-inner.component';
import { WhichPositionChooseComponent } from './which-position-choose/which-position-choose.component';
import { AllSvgAppModule } from '../all-svg-app/all-svg-app.module';


@NgModule({
  declarations: [
    HeaderSeatsComponent,
    BodyChooseSeatsComponent,
    SeatsOnlyComponent,
    SubtitleComponent,
    WarningAboutMovieTheaterComponent,
    OrderSummaryComponent,
    ChooseSeatsInnerComponent,
    WhichPositionChooseComponent,
    TypeOfThePaymentComponent,
    BackOrProgressFooterComponent,
    OnlySeatsComponent,
    BomboniereComponent,
  ],
  imports: [
    CommonModule,
    ItensAboutMovieRoutingModule,
    FormsModule,
    AllSvgAppModule,

  ],
  exports: [
    HeaderSeatsComponent // Exporte o componente se ele for usado em outros módulos
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ItensAboutMovieModule { }