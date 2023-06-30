import { UtilService } from './../services/util.service';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private utilService: UtilService) {}

  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      this.utilService.handleToast('Usuário sem autorização, faça o login para continuar!', 'login')
      return false;
    }
  }
}
