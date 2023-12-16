import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherState } from '../../state/app.state'; // Assuming this is your app's root state
import { currTempType, selectweather, selectFavorites, theme } from '../../state/weather/weather.selectors';
import { loadweather } from '../../state/weather/weather.actions';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IFullCityData } from 'src/app/interfaces/weather-data.interface';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  tempType$!: Observable<string>
  weatherCard$: Observable<IFullCityData>;
  theme$: Observable<any>;
  private unsubscribe$ = new Subject<void>();
  favorites$: Observable<any>;
  favorites:IFullCityData[] = []
  theme: string = '';

  constructor(private store: Store<WeatherState>) {
    this.weatherCard$ = this.store.select(selectweather);
    this.tempType$ = this.store.select(currTempType);
    this.theme$ = this.store.select(theme)
    this.favorites$ = this.store.select(selectFavorites)
  }

  ngOnInit(): void {

    this.weatherCard$.pipe(takeUntil(this.unsubscribe$)).subscribe((weatherInfo)=> {
    if ( !weatherInfo?.locationData?.Key) {
      this.store.dispatch(loadweather());
    }
    })

    this.favorites$.pipe(takeUntil(this.unsubscribe$)).subscribe((favorites)=> {
    this.favorites = favorites
    })

    this.theme$.pipe(takeUntil(this.unsubscribe$)).subscribe((theme)=> {
    this.theme = theme
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
