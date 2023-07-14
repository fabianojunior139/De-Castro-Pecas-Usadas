import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public formGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(public authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const account: Account = this.formGroup.getRawValue();
    this.authService.login(account);
  }

  redirect(): void {
    this.router.navigate(['/home']);
  }
}
