import { UtilService } from './util.service';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Account, IToken } from '../models/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `/api/login`;
  private LoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.LoggedIn.asObservable();

  constructor(
    private HttpClient: HttpClient,
    private router: Router,
    private utilService: UtilService
  ) {}

  public login(user: Account) {
    const res = this.HttpClient.post<IToken>(this.baseUrl, user);

    res.subscribe({
      next: (token) => {
        this.setAccessToken(token);
        this.updateLoggedIn();
        this.router.navigate(['']);
      },
      error: () => {
        this.utilService.handleRequestError('Credenciais inválidas');
      },
    });
  }

  public logout(): void {
    window.localStorage.clear();
    this.utilService.handleRequestError('usuário deslogado com sucesso!')
    this.router.navigate(['/login']);
  }

  setAccessToken(token: IToken): void {
    window.localStorage.setItem('token', token.token);
  }

  updateLoggedIn(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.LoggedIn.next(true);
    } else {
      this.LoggedIn.next(false);
    }
  }

  isUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    } else {
      return true;
    }
  }
}
