
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ConvertToCelcius'
})
export class ConvertToCelcius implements PipeTransform {
  transform(value: number, tempType: string | null): number {
    if (tempType === 'c') {
    
      return Math.floor( (value - 32) * 5/9);
    } else {
      return value;
    }
  }
}