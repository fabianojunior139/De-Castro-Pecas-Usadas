import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class AutomotivePart {
  private readonly baseUrl = `/api/automotive-part`;

  constructor(private HttpClient: HttpClient) {}

  //Listando todas as peças cadastradas no estoque
  getAllAutomotivesParts(): Observable<ResponseAPI> {
    return this.HttpClient.get<ResponseAPI>(this.baseUrl);
  }
}
