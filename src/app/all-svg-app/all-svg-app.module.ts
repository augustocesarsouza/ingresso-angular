import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgLocationComponent } from './svg-location/svg-location.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgUserComponent } from './svg-user/svg-user.component';
import { SvgLockComponent } from './svg-lock/svg-lock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent,
    SvgLockComponent,

  ],
  exports: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent,
    SvgLockComponent
  ]
})
export class AllSvgAppModule { }
