import { Component, Input, OnInit } from '@angular/core';
import { IDailyForecasts } from 'src/app/interfaces/weather-data.interface';

@Component({
    selector: 'app-daily-forecast',
    templateUrl: './daily-forecast.component.html',
    styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
    @Input() weather!: IDailyForecasts; //
    @Input() tempType: string | null = 'c';
    @Input() theme: string = '';
    day: string = '';

    constructor() {
    }

    ngOnInit(): void {
    this.checkDay(new Date(this.weather.Date).getDay())
    }

    checkDay(num: number) {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.day = days[num];
    }

    getIconPath(iconNumber: number): string {
        return `/assets/icons/${iconNumber}.png`;
    }
}
