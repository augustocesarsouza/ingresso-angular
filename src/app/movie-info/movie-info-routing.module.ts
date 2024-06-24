import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieChooseMovieTheaterComponent } from './movie-choose-movie-theater/movie-choose-movie-theater.component';

const routes: Routes = [
  { path: ':movieId', component: MovieChooseMovieTheaterComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieInfoRoutingModule { }
