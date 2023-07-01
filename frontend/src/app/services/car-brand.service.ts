import { Injectable } from '@angular/core';
import { ICarBrand } from './../models/car-brand';
import { ResponseAPI } from './../models/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Method } from '../models/api';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class CarBrandService {
  private readonly baseUrl = `/api/car-brand`;

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {}

  //Listando todos as marcas de carros
  list(): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(this.baseUrl);
  }

  //Listando carro por Id
  findCarBrandById(id: string): Observable<ICarBrand> {
    const url = this.baseUrl + '/' + id;
    return this.httpClient.get<ICarBrand>(url);
  }

  //Salvado e editando modelos de carros
  saveCarBrand(car: ICarBrand, method: Method): void {
    let res;

    switch (method) {
      case 'post':
        res = this.httpClient.post<ICarBrand>(this.baseUrl, car);
        break;
      case 'put':
        res = this.httpClient.put<ICarBrand>(this.baseUrl, car);
        break;
    }

    res.subscribe({
      next: (APIresponse: ICarBrand) => {
        this.utilService.handleToast(
          'A marca ' + APIresponse.name + ' foi salva com sucesso'
        );
      },
      error: () => {
        this.utilService.handleToast(
          'A marca informada já está cadastrada no sistema'
        );
      },
    });
  }

  //Deletando uma marca
  delete(id: number): void {
    const url = this.baseUrl + '/' + id;
    this.httpClient.delete(url).subscribe({
      next: () => {
        this.list();
      },
      error: () => {
        this.utilService.handleToast(
          'Houve um erro inesperado, tente novamente'
        );
      },
    });
  }
}
