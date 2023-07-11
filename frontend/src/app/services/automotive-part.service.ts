import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Method, ResponseAPI } from '../models/api';
import { IParts } from '../models/automotivePart';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class AutomotivePart {
  private readonly baseUrl = `/api/automotive-part`;

  constructor(
    private HttpClient: HttpClient,
    private utilService: UtilService
  ) {}

  //Listando todas as peças cadastradas no estoque
  getAllAutomotivesParts(): Observable<ResponseAPI> {
    return this.HttpClient.get<ResponseAPI>(this.baseUrl);
  }

  //Lista uma peça específica por ID
  findPartById(id: string): Observable<IParts> {
    const url = this.baseUrl + '/' + id;
    return this.HttpClient.get<IParts>(url);
  }

  //Lista uma peça específica por ID para edição
  findPartByIdToEdit(id: string): Observable<IParts> {
    const url = this.baseUrl + '/edit/' + id;
    return this.HttpClient.get<IParts>(url);
  }

  //Cadastrado ou editando uma peça
  savePart(part: IParts, method: Method): void {
    let res;

    switch (method) {
      case 'post':
        res = this.HttpClient.post<IParts>(this.baseUrl, part);
        break;
      case 'put':
        res = this.HttpClient.put<IParts>(this.baseUrl, part);
        break;
    }

    res.subscribe({
      next: (APIresponse: IParts) => {
        this.utilService.handleToast(
          'A peça ' + APIresponse.name + ' foi salva com sucesso'
        );
      },
      error: (error) => {
        console.log(error);

        this.utilService.handleToast(
          'Um erro inesperado aconteceu, tente novamente'
        );
      },
    });
  }
}
