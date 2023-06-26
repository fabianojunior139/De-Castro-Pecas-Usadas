import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  handleToast(message: string, urlRedirect?: string): Observable<any> {
    this.showMessage(message, true);

    if (urlRedirect) {
      this.router.navigate([urlRedirect]);
    }

    return EMPTY;
  }

  showMessage(message: string, error = false): void {
    this.snackBar.open(message, 'x', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: error ? 'snackbar-error' : 'snackbar-success',
    });
  }
}
