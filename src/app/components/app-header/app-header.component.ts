import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store'; // Assuming use of NgRx for state management
import { Observable } from 'rxjs';
import { WeatherState } from 'src/app/state/app.state';
import { toggleTempType } from 'src/app/state/weather/weather.actions';
import { currTempType, theme } from 'src/app/state/weather/weather.selectors';



@Component({
    selector: 'app-header-component',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class HeaderComponentComponent implements OnInit {
    @Input() colorPickerClicked: boolean | undefined;
    @Output() colorPClicked = new EventEmitter<boolean>();
    tempType$: Observable<string>
    theme$: Observable<string>
    clickedTemp: string | null = null;

    constructor(private store: Store<WeatherState>) {
      this.tempType$ = this.store.select(currTempType)
      this.theme$ = this.store.select(theme)
    } 

    ngOnInit() {
    }

    async toggleTempType() {
        this.store.dispatch(toggleTempType());
    }

    changeTemp() {
        this.colorPClicked.emit(!this.colorPickerClicked);
    }

}
