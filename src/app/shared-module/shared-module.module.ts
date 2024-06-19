import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../home-page/navigation/navigation.component';
import { NavigationVariedComponent } from '../home-page/navigation-varied/navigation-varied.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationVariedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    NavigationVariedComponent,
  ]
})
export class SharedModuleModule { }
