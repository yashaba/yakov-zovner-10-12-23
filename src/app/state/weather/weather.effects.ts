import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import {loadweather, setCard, addCardToFavorites , removeCardFromFavorites } from './weather.actions';
import { WeatherService } from '../../services/weather.service';
import { select , Store} from '@ngrx/store';
import { selectFavorites } from './weather.selectors';
import { WeatherState } from '../app.state';

@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService,  private store: Store<WeatherState>) {}


  loadweather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadweather),
      mergeMap(() =>
        this.weatherService
          .getweather()
          .then((card) => {
            return  setCard({ card });
          })
          .catch(() => {
            console.log('errr');
            
            return { type: '[Weather] Load Current Card Failed' };
          })
      )
    )
  );

  saveweather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCard),
      switchMap((action) => {
        const card = action.card;
        this.weatherService.saveCard(card); 
        return [];
      }),
    ),
    { dispatch: false }
  );

  saveFavoritesToLocalStorage$ = createEffect(() => 
  this.actions$.pipe(
    ofType(addCardToFavorites, removeCardFromFavorites),
    withLatestFrom(this.store.pipe(select(selectFavorites))),
    tap(([_, favorites]) => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    })
  ),
  { dispatch: false } // Set dispatch to false because this effect doesn't dispatch an action
);

}
