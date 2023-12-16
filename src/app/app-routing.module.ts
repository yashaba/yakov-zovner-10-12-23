import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [{path:'', component: WeatherPageComponent}, {path:'favorites', component: FavoritesPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
