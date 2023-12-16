import { Component, EventEmitter, OnDestroy, OnInit, Output, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { WeatherState } from 'src/app/state/app.state';
import { setBgc, setTheme } from 'src/app/state/weather/weather.actions';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit, OnDestroy {
  colorNum:number = 0;
  private unsubscribe$ = new Subject<void>();
  @Output() closePickerEv = new EventEmitter()

  constructor(private store: Store<WeatherState>) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  optionNum(num: number): string {
    let className = 'sky-gradient-' + ((num < 10) ? `0${num}` : num);
    if (num <= 5 || num >= 20) {
      className += ' darkTheme';
    }
    return className;
  }

  formatTime(num: number): string {
    const time = (num < 10) ? `0${num}` : num;
    return time === 24 ? '00' : time.toString();
  }

  hoverColor(colorNum: number): void {
    this.setColor(colorNum)
  }

  setColor(colorNum: number): void {
    this.colorNum = colorNum;
    let className = 'sky-gradient-' + ((colorNum < 10) ? `0${colorNum}` : colorNum);
    let theme = 'lightTheme'
    if (colorNum <= 5 || colorNum >= 20) {
      className += ' darkTheme';
      theme = 'darkTheme'
    }
    this.store.dispatch(setBgc({ bgc: className }));
    this.store.dispatch(setTheme({theme}));
  }

  closePicker(){
    this.closePickerEv.emit()
  }
}
