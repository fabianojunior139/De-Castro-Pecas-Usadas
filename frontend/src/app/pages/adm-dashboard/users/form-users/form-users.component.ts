import { Component } from '@angular/core';
import { IUser, IUserToRegister, IUserToUpdate } from 'src/app/models/user';
import { UserService } from '../../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css'],
})
export class FormUsersComponent {
  public userForm: FormGroup;
  public isEdit: boolean = false;
  public users!: IUser;
  public address: any;
  ufList: string[] = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO',
  ];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private utilService: UtilService
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
      cep: [
        null,
        [Validators.required, Validators.minLength(7), Validators.maxLength(8)],
      ],
    });
  }

  OnSubmit(): void {
    if (!this.isEdit) {
      const userToRegister: IUserToRegister = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        address: {
          address: this.userForm.value.address,
          number: parseInt(this.userForm.value.number),
          neighborhood: this.userForm.value.neighborhood,
          city: this.userForm.value.city,
          uf: this.userForm.value.uf,
          complement: this.userForm.value.complement,
          zip_code: this.userForm.value.cep,
        },
      };
      this.userService.saveUser(userToRegister, 'post');
      this.router.navigate(['dashboard/users/list']);
    } else {
      const userToUpdate: IUserToUpdate = {
        id: this.userForm.value.id,
        name: this.userForm.value.name,
        address: {
          address: this.userForm.value.address,
          number: parseInt(this.userForm.value.number),
          neighborhood: this.userForm.value.neighborhood,
          city: this.userForm.value.city,
          uf: this.userForm.value.uf,
          complement: this.userForm.value.complement,
          zip_code: this.userForm.value.cep,
        },
      };
      this.userService.saveUser(userToUpdate, 'put');
      this.router.navigate(['dashboard/users/list']);
    }
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.isEdit = userId !== null;

    if (this.isEdit && userId) {
      const resEdit = this.userService.findUserById(userId);

      resEdit.subscribe({
        next: (APIresponse: IUser) => {
          this.users = APIresponse;
          this.userForm.patchValue({
            id: this.users.id,
            name: this.users.name,
            email: this.users.email,
            address: this.users.address.address,
            neighborhood: this.users.address.neighborhood,
            cep: this.users.address.zip_code,
            city: this.users.address.city,
            uf: this.users.address.uf,
            number: this.users.address.number,
            complement: this.users.address.complement,
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  zipcodeSearch() {
    axios
      .get(`https://viacep.com.br/ws/${this.userForm.value.cep}/json/`)
      .then((response) => {
        if (!response.data.erro) {
          this.address = response.data;
          this.fillFormFields();
        } else {
          this.utilService.handleToast('CEP inválido, tente novamente!');
          this.userForm.controls['cep'].setValue('');
        }
      })
      .catch((error) => {
        this.utilService.handleToast('CEP inválido, tente novamente!');
        this.userForm.controls['cep'].setValue('');
      });
  }

  fillFormFields() {
    this.userForm.controls['address'].setValue(this.address.logradouro);
    this.userForm.controls['neighborhood'].setValue(this.address.bairro);
    this.userForm.controls['uf'].setValue(this.address.uf);
    this.userForm.controls['city'].setValue(this.address.localidade);
  }
}
