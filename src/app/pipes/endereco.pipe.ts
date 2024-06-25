import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'endereco'
})
export class EnderecoPipe implements PipeTransform {

  transform(endereco: IAddress): string {
    return `${endereco.rua}, Nº ${endereco.numero} - ${endereco.cidade}/${endereco.estado}`
  }

}
