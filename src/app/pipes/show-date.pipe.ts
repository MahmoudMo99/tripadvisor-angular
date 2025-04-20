import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDate'
})
export class ShowDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {

    value = new Date(value);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (value.getDate() === today.getDate()) {
      return 'Today';
    } else if (value.getDate() === yesterday.getDate()) {
      return 'Yesterday';
    } else {
      return `${value.toLocaleString('default', { month: 'short' })} ${value.getFullYear()}`;
    }
  }

}
