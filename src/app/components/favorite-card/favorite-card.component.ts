import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IFullCityData } from '../../interfaces/weather-data.interface';
import { removeCardFromFavorites, setCard } from 'src/app/state/weather/weather.actions';
import { theme } from 'src/app/state/weather/weather.selectors';
import { Observable } from 'rxjs';
import { WeatherState } from 'src/app/state/app.state';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoritesCardComponent implements OnInit {
  @Input() cityData!: IFullCityData;
  @Input() favoriteIdx!: number
  theme$: Observable<any>;

  constructor(private store: Store<WeatherState>, private router: Router) {
    this.theme$ = this.store.select(theme)
  }

  ngOnInit(): void {}

  setCard() {
    this.store.dispatch(setCard({card: this.cityData}));
    this.router.navigate(['/']);
  }
  removeFromFavorites(event: Event) {
    event.stopPropagation();
    this.store.dispatch(removeCardFromFavorites({cardIdx: this.favoriteIdx}));
  }



  setRandomImageClass() {
    return `img-${this.getRandomInt(4)}`;
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
