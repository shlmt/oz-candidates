import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expYears'
})
export class ExpYearsPipe implements PipeTransform {

  private currentYear = new Date().getFullYear()

  transform(value: number): number {
    return value ? this.currentYear-value : 0;
  }

}
