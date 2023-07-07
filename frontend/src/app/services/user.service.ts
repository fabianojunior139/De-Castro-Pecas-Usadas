import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Method } from '../models/api';
import { UtilService } from './util.service';
import { IUser } from './../models/user';
import { ResponseAPI } from './../models/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {}

  private readonly baseUrl = `/api/user`;

  //Listando todos os usuários
  list(): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(this.baseUrl);
  }

  //Listando usuário por Id
  findUserById(id: string): Observable<IUser> {
    const url = this.baseUrl + '/' + id;
    return this.httpClient.get<IUser>(url);
  }

  //Salvado e editando usuários
  saveUser(user: IUser, method: Method): void {
    let res;

    switch (method) {
      case 'post':
        res = this.httpClient.post<IUser>(this.baseUrl, user);
        break;
      case 'put':
        res = this.httpClient.put<IUser>(this.baseUrl, user);
        break;
    }

    res.subscribe({
      next: (APIresponse: IUser) => {
        this.utilService.handleToast(
          'O usuário ' + APIresponse.name + ' foi salvo com sucesso'
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

    //Deletando um usuário
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
