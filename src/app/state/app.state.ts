import { IFullCityData } from '../interfaces/weather-data.interface';

export interface AppState {
      weather: IFullCityData;
      favorites: IFullCityData[];
      tempType: string;
      bgc: string;
      theme: string;

}

export interface WeatherState  {
      weather: AppState
}