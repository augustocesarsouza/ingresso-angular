import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieChooseMovieTheaterComponent } from './movie-choose-movie-theater/movie-choose-movie-theater.component';
import { MovieInfoRoutingModule } from './movie-info-routing.module';

@NgModule({
  declarations: [MovieChooseMovieTheaterComponent],
  imports: [
    CommonModule,
    MovieInfoRoutingModule,
    FormsModule
  ]
})
export class MovieInfoModule { }
