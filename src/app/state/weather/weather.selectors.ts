import { createSelector } from '@ngrx/store';
import { WeatherState } from '../app.state';

 export const selectweather = createSelector(
    (state:WeatherState) =>  state.weather.weather,
    (weather) =>  weather
  );

  export const selectFavorites = createSelector(
    (state: WeatherState) => state.weather.favorites,
    (favorites) => favorites
  );

  export const currTempType = createSelector(
    (state: WeatherState) => state.weather.tempType,
    (tempType) => tempType
  );

  export const bgc = createSelector(
    (state: WeatherState) => state.weather.bgc,
    (bgc) => bgc
  );
  export const theme = createSelector(
    (state: WeatherState) => state.weather.theme,
    (theme) => theme
  );