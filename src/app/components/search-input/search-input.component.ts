import { Component, EventEmitter, Output, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { ISearchResult } from '../../interfaces/weather-data.interface';
import { Store } from '@ngrx/store';
import { WeatherService } from 'src/app/services/weather.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { setCard } from 'src/app/state/weather/weather.actions';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  city: string = "";
  isWriting: boolean = false;
  cityListRender: ISearchResult[] = [];
  @Output() newCardEvent = new EventEmitter<void>();
  @ViewChild('searchCity') searchCityInput: ElementRef | undefined;
  @Input() theme$!: Observable<string>
  private cityInputSubject = new BehaviorSubject<string>('');
  cityInput$ = this.cityInputSubject.asObservable();


  constructor(private store: Store, private weatherService: WeatherService) {}

  ngOnInit() {
    this.cityInput$
      .pipe(
        debounceTime(300), // Debounce for 300ms
        distinctUntilChanged(), // Ignore if the value hasn't changed
        switchMap(city => {
          if (city && city.trim() !== '') {
            return this.weatherService.searchForCities(city);
          } else {
            return of([]); // Return an empty array if city is empty or whitespace
          }
        })
      )
      .subscribe(cityList => {
        this.cityListRender = cityList;
      });
  }
  

  async searchForCities() {
    this.cityInputSubject.next(this.city);
  }

  async makeCard(cardInfo: ISearchResult) {
    this.city = "";
    this.isWriting = false;
    this.cityListRender = [];
    const isSCard = this.isSaved(cardInfo.Key);
    if (!isSCard) {
      const fullCItyWeather =  await this.weatherService.getCard(cardInfo)
      this.store.dispatch(setCard({card: fullCItyWeather} ))
    }
  }

  setIsWriting(event: any) {
    this.isWriting = event.target.value !== "";
    this.searchForCities()
  }

  setInput() {
    this.searchCityInput!.nativeElement.focus();
  }

  isSaved(key?: string) {
    const card = JSON.parse(localStorage.getItem("savedCard") as string);
    return key === card.locationData.Key ? card : false;
  }

}
