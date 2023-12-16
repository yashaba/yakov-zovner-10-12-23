import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { AppState } from '../app.state';
import { WeatherService } from 'src/app/services/weather.service';
import { IFullCityData } from 'src/app/interfaces/weather-data.interface';
const emptyCityData: IFullCityData = {
  locationData: {
    Key: '',
    Type: '',
    LocalizedName: '',
    Country: {
      ID: '',
      LocalizedName: ''
    }
  },
  mainWeather: {
    LocalObservationDateTime: '',
    EpochTime: 0,
    WeatherText: '',
    WeatherIcon: 0,
    Temperature: {
      Metric: {
        Value: 0,
        Unit: "C",
      },
      Imperial: {
        Value: 0,
        Unit: "F",
      }
    }
  },
  dailyForecasts: []
};


export const initialState: AppState = {
  weather: emptyCityData,
  favorites: WeatherService.loadFavorites(),
  tempType: 'c',
  bgc: 'sky-gradient-01',
  theme: 'lightTheme',
};

function toggleTempType(tempType:string){
if (tempType === 'c') return 'f'
return 'c'
}


export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.setCard, (state, { card }) => ({ ...state, weather: card })),
  on(WeatherActions.addCardToFavorites, (state, { weather }) => ({ ...state, favorites: [...state.favorites, weather] })),
  on(WeatherActions.removeCardFromFavorites, (state, { cardIdx }) => ({ ...state, favorites: state.favorites.filter((_, index) => index !== cardIdx) })),
  on(WeatherActions.toggleTempType, (state) => ({ ...state, tempType: toggleTempType(state.tempType) })),
  on(WeatherActions.setBgc, (state, {bgc}) => ({ ...state, bgc})),
  on(WeatherActions.setTheme, (state, {theme}) => ({ ...state, theme}))
  );



  