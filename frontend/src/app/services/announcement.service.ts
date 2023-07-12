import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';
import { Method, ResponseAPI } from '../models/api';
import { IAnnouncement } from '../models/announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private readonly baseUrl = `/api/announcement`;

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {}

  //Listando todos os anúncios
  list(): Observable<ResponseAPI> {
    return this.httpClient.get<ResponseAPI>(this.baseUrl);
  }

  //Listando anúncio por Id
  findAnnouncementById(id: string): Observable<IAnnouncement> {
    const url = this.baseUrl + '/' + id;
    return this.httpClient.get<IAnnouncement>(url);
  }

  //Salvado e editando anúncios
  saveAnnouncement(announcement: IAnnouncement, method: Method): void {
    let res: Observable<any>;

    switch (method) {
      case 'post':
        res = this.httpClient.post<IAnnouncement>(this.baseUrl, announcement);
        break;
      case 'put':
        res = this.httpClient.put<IAnnouncement>(this.baseUrl, announcement);
        break;
    }

    res.subscribe({
      next: (APIresponse) => {
        this.utilService.handleToast('Anúncio publicado com sucesso!');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
