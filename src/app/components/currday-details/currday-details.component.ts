import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherState } from 'src/app/state/app.state';
import { currTempType } from 'src/app/state/weather/weather.selectors';

interface CityData {
  mainWeather: {
    WeatherText: string;
    Temperature: {
      Metric: { Value: number; };
      Imperial: { Value: number; };
    };
  };
  locationData: {
    LocalizedName: string;
  };
}

@Component({
  selector: 'app-currday-details',
  templateUrl: './currday-details.component.html',
  styleUrls: ['./currday-details.component.scss']
})
export class CurrdayDetailsComponent implements OnInit {
  @Input() cityData!: CityData;
  @Input() theme$!: Observable<string>
  tempType$: Observable<string>;

  constructor(private store: Store<WeatherState>) {
    this.tempType$ = this.store.select(currTempType);
  }

  ngOnInit(): void {}
}
