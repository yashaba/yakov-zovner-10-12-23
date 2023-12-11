import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { CurrdayDetailsComponent } from './components/currday-details/currday-details.component';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';
import { FutureDetailsComponent } from './components/future-details/future-details.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    FavoritesPageComponent,
    AppHeaderComponent,
    CurrdayDetailsComponent,
    FavoriteCardComponent,
    FutureDetailsComponent,
    SearchInputComponent,
    WeatherInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
