import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogData } from '../models/confirm-dialog-data';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirmDialog(data: string): Observable<boolean> {
    return this.dialog
      .open(ConfirmDialogComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}
