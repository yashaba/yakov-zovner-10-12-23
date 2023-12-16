import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { WeatherState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { addCardToFavorites, removeCardFromFavorites } from 'src/app/state/weather/weather.actions';
import { IFullCityData } from 'src/app/interfaces/weather-data.interface';


@Component({
    selector: 'app-weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {
    @Input() weatherCard!: IFullCityData;
    @Input() favorites: IFullCityData[] = [];
    @Input() tempType$!:Observable<string>;
    @Input() theme$!: Observable<any>;
    constructor(private store: Store<WeatherState>) {
    }

    toggleFav() {
       if ( this.isFavorite()) {
         this.store.dispatch(removeCardFromFavorites({cardIdx:  this.favoriteIdx()}));
       } else {
         this.store.dispatch(addCardToFavorites({weather: this.weatherCard}));
       }


    }

    favoriteIdx(key?: string): number {
        const searchBy = key ? key : this.weatherCard?.locationData?.Key;
        if (this.weatherCard) {
            const cardIdx = this.favorites.findIndex(fav => fav.locationData.Key === searchBy);
            return cardIdx;
        }
        return -1
    }

    isFavorite(): boolean{
    return this.favoriteIdx() > -1
    }

    isSaved(key?: string) {
        const card = JSON.parse(localStorage.getItem("savedCard") as string);
        return key === card.locationData.Key ? card : false;
    }


    get setDate(): string {
        let date = this.weatherCard.mainWeather.LocalObservationDateTime;
        return moment(date).format("LL");
    }

  
    getWeatherIconSrc():string {
        return `assets/icons/${this.weatherCard.mainWeather.WeatherIcon}.png`;
    }
}
