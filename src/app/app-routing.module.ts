import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'my-account',
    loadChildren: () => import('./login-and-register-user/login-and-register-user.module').then(m => m.LoginAndRegisterUserModule)
  },
  { path: 'movie',
    loadChildren: () => import('./movie-info/movie-info.module').then(m => m.MovieInfoModule)
  },
  { path: 'itens-about-movie',
    // loadChildren: () => import('./choose-seats/itens-about-movie-routing.module').then(m => m.ItensAboutMovieRoutingModule)
    loadChildren: () => import('./itens-about-movie/itens-about-movie.module').then(m => m.ItensAboutMovieModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
