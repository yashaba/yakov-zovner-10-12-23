import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currTempType } from 'src/app/state/weather/weather.selectors';
import { WeatherState } from 'src/app/state/app.state';
import { IFullCityData } from 'src/app/interfaces/weather-data.interface';

@Component({
  selector: 'app-future-details',
  templateUrl: './future-details.component.html',
  styleUrls: ['./future-details.component.scss']
})
export class FutureDetailsComponent {
  @Input() cityData!: IFullCityData; 
  @Input() theme$!: Observable<string>;
  tempType$: Observable<string>;

  constructor(private store: Store<WeatherState>) {
    this.tempType$ = this.store.select(currTempType);
  }

  skipDay(num: number): string {
    return moment().add(num, 'day').format('ddd');
  }

  getIconPath(iconNumber: number): string {
    return `/assets/icons/${iconNumber}.png`; // Update the path as needed
  }
}
