import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(value.includes(args[0])) {
      return args[1] + value + args[1]
    } else {
      return value;
    }
  }
}