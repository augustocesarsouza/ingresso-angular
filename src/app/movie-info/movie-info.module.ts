import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieChooseMovieTheaterComponent } from './movie-choose-movie-theater/movie-choose-movie-theater.component';
import { MovieInfoRoutingModule } from './movie-info-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AllSvgAppModule } from "../all-svg-app/all-svg-app.module";
import { SchuduleMovieTheaterComponent } from './schudule-movie-theater/schudule-movie-theater.component';
import { BannerInfoAboutMovieComponent } from './banner-info-about-movie/banner-info-about-movie.component';
import { MovieSessionsAndInfoComponent } from './movie-sessions-and-info/movie-sessions-and-info.component';
import { DayAndDayWeakAndMovieTheaterTypesComponent } from './day-and-day-weak-and-movie-theater-types/day-and-day-weak-and-movie-theater-types.component';
import { MovieLocationHoursNormalComponent } from './movie-location-hours-normal/movie-location-hours-normal.component';
import { MovieLocationHoursFilteredComponent } from './movie-location-hours-filtered/movie-location-hours-filtered.component';
import { ModalDetailsAboutMovieTheaterComponent } from './modal-details-about-movie-theater/modal-details-about-movie-theater.component';

@NgModule({
    declarations: [
        MovieChooseMovieTheaterComponent,
        SchuduleMovieTheaterComponent,
        BannerInfoAboutMovieComponent,
        MovieSessionsAndInfoComponent,
        DayAndDayWeakAndMovieTheaterTypesComponent,
        MovieLocationHoursNormalComponent,
        MovieLocationHoursFilteredComponent,
        ModalDetailsAboutMovieTheaterComponent,
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
