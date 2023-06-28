import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterParts',
})
export class FiltersPipe implements PipeTransform {
  transform(parts: any[], filters: any): any[] {
    if (!parts || !filters) {
      return parts;
    }

    return parts.filter((part) => {
      // Filtrar pelo nome do carro
      if (
        filters.car &&
        part.car.toLowerCase().includes(filters.car.toLowerCase())
      ) {
        return false;
      }

      // Filtrar pelo modelo do carro
      if (
        filters.car_model &&
        part.car_model.toLowerCase().includes(filters.car_model.toLowerCase())
      ) {
        return false;
      }

      // Filtrar pela marca do carro
      if (
        filters.car_brand &&
        part.car_brand.toLowerCase().includes(filters.car_brand.toLowerCase())
      ) {
        return false;
      }

      // Filtrar pelo ano da peça
      if (filters.year && part.year !== filters.year) {
        return false;
      }

      // Filtrar pelo nome da peça
      if (
        filters.name &&
        part.name.toLowerCase().includes(filters.name.toLowerCase())
      ) {
        return false;
      }

      // Se passar por todos os filtros, retorna true para incluir o item
      return true;
    });
  }

  // transform(parts: any[], filter: string) {
  //   if (!parts) {
  //     return parts;
  //   }

  //   filter = filter.toLowerCase();

  //   return parts.filter((part) => {
  //     return part.name.toLowerCase().includes(filter);
  //   });
  // }
}
