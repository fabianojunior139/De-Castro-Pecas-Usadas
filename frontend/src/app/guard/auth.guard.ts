import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
      console.log("usuário logado com Token");

      return true;
    } else {
      console.log("Usuário não possui token");

      this.router.navigate(['login']);
      return false;
    }
  }
}
