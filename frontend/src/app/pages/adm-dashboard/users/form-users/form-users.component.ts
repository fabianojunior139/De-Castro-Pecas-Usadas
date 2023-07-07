import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from '../../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css'],
})
export class FormUsersComponent {
  public userForm: FormGroup;
  public isEdit: boolean = false;
  public users!: IUser;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.minLength(2), Validators.maxLength(30)]],
      email: [null, [Validators.email, Validators.maxLength(30)]],
      password: [null, [Validators.minLength(8), Validators.maxLength(30)]],
      confirmPassword: [
        null,
        [Validators.minLength(8), Validators.maxLength(30)],
      ],
      address: [null, [Validators.required, Validators.maxLength(50)]],
      number: [null, [Validators.required, Validators.maxLength(8)]],
      neighborhood: [null, [Validators.required, Validators.maxLength(30)]],
      city: [null, [Validators.required, Validators.maxLength(30)]],
      uf: [
        null,
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
      ],
      complement: [null, [Validators.required, Validators.maxLength(30)]],
      cep: [null, [Validators.required, Validators.maxLength(9)]],
    });
  }
}
