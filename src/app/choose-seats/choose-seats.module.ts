import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseSeatsRoutingModule } from './choose-seats-routing.module';
import { SeatsComponent } from './seats/seats.component';


@NgModule({
  declarations: [
    SeatsComponent
  ],
  imports: [
    CommonModule,
    ChooseSeatsRoutingModule
  ]
})
export class ChooseSeatsModule { }
