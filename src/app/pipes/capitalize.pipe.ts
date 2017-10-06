import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = 'test'
 *  {{ value.name | capitalizefirst  }}
 *  fromats to: Test
*/
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if ((!value) || value.length == 0) return value;
    if (typeof value !== 'string') {
      return;
    }

    if (value.length == 1)
      return value.toUpperCase();
    else {
      value = value.toLowerCase();
      return value[0].toUpperCase() + value.substr(1);
    }
  }
}