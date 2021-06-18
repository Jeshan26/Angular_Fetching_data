import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {
 sum:number;
  transform(value: Array<String>): any {
      this.sum = value.reduce((a,b)=> {
      return Number(a)+ Number(b) ;
    },0)
    
    return this.sum/value.length;
  }

}
