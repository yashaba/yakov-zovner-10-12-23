import { createAction, props } from '@ngrx/store';
import { IFullCityData } from '../../interfaces/weather-data.interface';

export const setCard = createAction('[Weather] Set Current Card', props<{ card: IFullCityData }>());
export const toggleTempType = createAction('[Weather] Toggle Current Tempature Type');
export const addCardToFavorites = createAction('[Weather] Add Card to Favorites', props<{ weather: IFullCityData }>());
export const toggleCardFromFavorites = createAction('[Weather] Toggle Card to Favorites', props<{ weather: IFullCityData }>());
export const removeCardFromFavorites = createAction('[Weather] Remove Card from Favorites', props<{ cardIdx: number }>());
export const loadweather = createAction('[Weather] Load Current Card');
export const setBgc = createAction('[Weather] Set Background Color', props<{bgc:string}>());
export const setTheme = createAction('[Weather] Set Theme', props<{theme:string}>());

// export function loadweather(loadweather: any): import("rxjs").OperatorFunction<import("@ngrx/store").Action, any> {
//     throw new Error('Function not implemented.');
// }

