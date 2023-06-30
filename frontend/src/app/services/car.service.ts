import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Method, ResponseAPI } from '../models/api';
import { ICar } from '../models/car';
import { Icon } from '@fortawesome/fontawesome-svg-core';
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
      next: (APIresponse) => {
        this.utilService.handleToast(
          'O carro ' + APIresponse.name + ' foi salvo com sucesso'
        );
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  findCarById(findCarById: string): Observable<ICar> {
    const url = this.baseUrl + '/' + findCarById;
    return this.httpClient.get<ICar>(url);
  }
}
