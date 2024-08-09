import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieChooseMovieTheaterComponent } from './movie-choose-movie-theater/movie-choose-movie-theater.component';
import { MovieInfoRoutingModule } from './movie-info-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AllSvgAppModule } from "../all-svg-app/all-svg-app.module";
import { SchuduleMovieTheaterComponent } from './schudule-movie-theater/schudule-movie-theater.component';
import { BannerInfoAboutMovieComponent } from './banner-info-about-movie/banner-info-about-movie.component';

@NgModule({
    declarations: [
        MovieChooseMovieTheaterComponent,
        SchuduleMovieTheaterComponent,
        BannerInfoAboutMovieComponent,
    ],
    imports: [
        CommonModule,
        MovieInfoRoutingModule,
        FormsModule,
        SharedModuleModule,
        AllSvgAppModule
    ]
})
export class MovieInfoModule { }
