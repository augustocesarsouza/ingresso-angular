import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseSeatsRoutingModule } from './choose-seats-routing.module';
import { SeatsComponent } from './seats/seats.component';
import { FormsModule } from '@angular/forms';
import { HeaderSeatsComponent } from './header-seats/header-seats.component';
import { AllSvgAppModule } from '../all-svg-app/all-svg-app.module';
import { BodyChooseSeatsComponent } from './body-choose-seats/body-choose-seats.component';
import { SeatsOnlyComponent } from './seats-only/seats-only.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { WarningAboutMovieTheaterComponent } from './warning-about-movie-theater/warning-about-movie-theater.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [
    SeatsComponent,
    HeaderSeatsComponent,
    BodyChooseSeatsComponent,
    SeatsOnlyComponent,
    SubtitleComponent,
    WarningAboutMovieTheaterComponent,
    OrderSummaryComponent,
  ],
  imports: [
    CommonModule,
    ChooseSeatsRoutingModule,
    FormsModule,
    AllSvgAppModule
  ],
  exports: [
    HeaderSeatsComponent // Exporte o componente se ele for usado em outros módulos
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ChooseSeatsModule { }
