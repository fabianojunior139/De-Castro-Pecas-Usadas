import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(public authService: AuthService) {}

  onSubmit(): void {
    console.log(this.formGroup.value);
    const account: Account = this.formGroup.getRawValue();
    this.authService.Login(account);
  }
}
