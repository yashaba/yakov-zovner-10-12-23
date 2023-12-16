import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CurrdayDetailsComponent } from './components/currday-details/currday-details.component';
import { FavoritesCardComponent } from './components/favorite-card/favorite-card.component';
import { FutureDetailsComponent } from './components/future-details/future-details.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { StoreModule } from '@ngrx/store';
import { WeatherService } from './services/weather.service';
import { weatherReducer } from './state/weather/weater.reducers';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/weather/weather.effects';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';
import { HeaderComponentComponent } from './components/app-header/app-header.component';
import { WeatherAPIService } from './services/weather.api.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ConvertToFarenheitPipe } from './pipes/convert-to-farenheit.pipe';
import { ConvertToCelcius } from './pipes/convert-to-celcius.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    FavoritesPageComponent,
    HeaderComponentComponent,
    CurrdayDetailsComponent,
    FavoritesCardComponent,
    FutureDetailsComponent,
    SearchInputComponent,
    WeatherInfoComponent,
    DailyForecastComponent,
    ConvertToFarenheitPipe,
    ConvertToCelcius,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({weather: weatherReducer}),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    
  ],
  providers:[WeatherAPIService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
