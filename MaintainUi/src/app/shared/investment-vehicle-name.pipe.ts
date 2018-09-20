import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investmentVehicleName'
})
export class InvestmentVehicleNamePipe implements PipeTransform {

  transform(value: number): string {
    if(value===1013726)
    return 'Aon Master Trust'
    else if(value===1005447)
    return 'My Life My Portfolio';
    else
    return value.toString();
  }

}
