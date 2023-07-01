import { Injectable } from '@angular/core';
import { ResponseAPI } from './../models/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Method } from '../models/api';
import { ICarModel } from '../models/car-model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  private readonly baseUrl = `/api/car-model`;

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {}

  //Listando todos os modelos de carros
  list(): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(this.baseUrl);
  }

  //Listando carro por Id
  findCarModelById(id: string): Observable<ICarModel> {
    const url = this.baseUrl + '/' + id;
    return this.httpClient.get<ICarModel>(url);
  }

  //Salvado e editando modelos de carros
  saveCarModel(car: ICarModel, method: Method): void {
    let res;

    switch (method) {
      case 'post':
        res = this.httpClient.post<ICarModel>(this.baseUrl, car);
        break;
      case 'put':
        res = this.httpClient.put<ICarModel>(this.baseUrl, car);
        break;
    }

    res.subscribe({
      next: (APIresponse: ICarModel) => {
        this.utilService.handleToast(
          'O modelo ' + APIresponse.model + ' foi salvo com sucesso'
        );
      },
      error: () => {
        this.utilService.handleToast(
          'O modelo informado já está cadastrado no sistema'
        );
      },
    });
  }

  //Deletando um modelo
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
