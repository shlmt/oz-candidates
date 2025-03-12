import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separate'
})
export class SeparatePipe implements PipeTransform {

  transform(value: unknown): string {
    return String(value) ? String(value).replace(/,/g, ', ') : ''
   }

}
