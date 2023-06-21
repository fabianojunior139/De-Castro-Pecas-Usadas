import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Account, IToken } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private readonly baseUrl = `${environment.api}login`;

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public Login(user: Account, redirect = '') {
    const res = this.HttpClient.post<IToken>(this.baseUrl, user);

    console.log(user);

    res.subscribe((token) => {
      this.setAccessToken(token);
      window.location.href = redirect;
    });
  }

  setAccessToken(token: IToken): void {
    window.localStorage.setItem('token', token.token);
  }
}
