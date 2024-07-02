import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllSvgAppModule } from './all-svg-app/all-svg-app.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home-page/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { SharedModuleModule } from './shared-module/shared-module.module';
import { ChooseSeatsModule } from './choose-seats/choose-seats.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllSvgAppModule,
    FormsModule,
    HttpClientModule,
    SharedModuleModule,
    ChooseSeatsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
