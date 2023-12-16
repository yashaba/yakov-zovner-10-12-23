import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToFarenheit'
})
export class ConvertToFarenheitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
