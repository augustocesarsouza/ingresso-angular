import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgLocationComponent } from './svg-location/svg-location.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgUserComponent } from './svg-user/svg-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent,
  ],
  exports: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent
  ]
})
export class AllSvgAppModule { }
