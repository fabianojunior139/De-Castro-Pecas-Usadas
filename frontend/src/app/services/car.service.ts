import { ResponseAPI } from './../models/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Method } from '../models/api';
import { ICar } from '../models/car';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private readonly baseUrl = `/api/car`;

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {}

  //Listando todos os carros
  list(): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(this.baseUrl);
  }

  //Listando carro por Id
  findCarById(findCarById: string): Observable<ICar> {
    const url = this.baseUrl + '/' + findCarById;
    return this.httpClient.get<ICar>(url);
  }

  //Salvado e editando carros
  saveCar(car: ICar, method: Method): void {
    let res;

    switch (method) {
      case 'post':
        res = this.httpClient.post<ICar>(this.baseUrl, car);
        break;
      case 'put':
        res = this.httpClient.put<ICar>(this.baseUrl, car);
        break;
    }

    res.subscribe({
      next: (APIresponse: ICar) => {
        this.utilService.handleToast(
          'O carro ' + APIresponse.name + ' foi salvo com sucesso'
        );
      },
      error: () => {
        this.utilService.handleToast(
          'O carro informado já está cadastrado no sistema'
        );
      },
    });
  }

  //Deletando um carro
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
