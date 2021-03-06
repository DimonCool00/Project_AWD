import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'moneyConverter'
})
export class MoneyConverterPipe implements PipeTransform {

  transform(value: number | undefined, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'R') {
        var rub = value / 5.64 ;
        return rub.toFixed(4);
      } else if (unit === 'E'){
        var eur = value / 500.5 ;
        return eur.toFixed(4) ;
      } else if (unit === 'D'){
        var dol = value / 418.6 ;
        return dol.toFixed(4) ;
      }
    }
    return;
  }
}
