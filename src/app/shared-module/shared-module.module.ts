import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../home-page/navigation/navigation.component';
import { NavigationVariedComponent } from '../home-page/navigation-varied/navigation-varied.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../home-page/footer/footer.component';
import { AllSvgAppModule } from '../all-svg-app/all-svg-app.module';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationVariedComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AllSvgAppModule
  ],
  exports: [
    NavigationComponent,
    NavigationVariedComponent,
    FooterComponent,
  ]
})
export class SharedModuleModule { }
