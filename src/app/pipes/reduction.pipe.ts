import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduction'
})
export class ReductionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
