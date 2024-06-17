import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './home-page/navigation/navigation.component';
import { NavigationVariedComponent } from './home-page/navigation-varied/navigation-varied.component';
import { AllSvgAppModule } from './all-svg-app/all-svg-app.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home-page/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationVariedComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllSvgAppModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
