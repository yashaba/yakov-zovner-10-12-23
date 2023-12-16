import { Component, OnInit } from '@angular/core';
import { IFullCityData } from '../../interfaces/weather-data.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFavorites } from 'src/app/state/weather/weather.selectors';
import { WeatherState } from 'src/app/state/app.state';

@Component({
  selector: 'app-favorites-page-component',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  favorites$: Observable<IFullCityData[]>;

  constructor(private store: Store<WeatherState>) {
    this.favorites$ = this.store.select(selectFavorites);
  }

  ngOnInit(): void {
    // Handle any initialization logic here
  }
}
