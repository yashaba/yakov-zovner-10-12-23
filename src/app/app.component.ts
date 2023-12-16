import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { bgc } from './state/weather/weather.selectors';
import { setBgc, setTheme } from './state/weather/weather.actions';
import { WeatherState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  color = '';
  colorPickerClicked = false;

  constructor(private store: Store<WeatherState>) {
    this.store.select(bgc).subscribe((c)=> {
    this.color = c;
    })
  }

  ngOnInit() {
    this.setFirstColor();
  }

  setFirstColor(){
    let colorNum = new Date().getHours();
    let className = `sky-gradient-${colorNum < 10 ? `0${colorNum}` : colorNum}`;
    let theme = 'lightTheme'
    if (colorNum <= 5 || colorNum >= 20) {
      className += ' darkTheme';
      theme = 'darkTheme'
    }
    this.color = className;
    this.store.dispatch(setBgc({bgc: this.color}));
    this.store.dispatch(setTheme({theme}));
  }

  setColor(num: number) {
    let className = `sky-gradient-${num < 10 ? `0${num}` : num}`;
    if (num <= 5 || num >= 20) {
      className += ' darkTheme';
    }
    
    this.color = className;
  }

  hoverColor(num:Event) {
    this.setColor(num as unknown as number);
  }

  closePicker() {
    this.colorPickerClicked = false;
  }

  setColorPicker(isClicked: boolean) {
    this.colorPickerClicked = isClicked;
  }
}
