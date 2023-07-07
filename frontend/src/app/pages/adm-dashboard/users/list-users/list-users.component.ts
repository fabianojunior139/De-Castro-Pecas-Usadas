import { UtilService } from './../../../../services/util.service';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from './../../../../models/user';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  readonly displayedColumns: string[] = [
    'name',
    'email',
    'address',
    'number',
    'city',
    'uf',
    'zip_code',
    'actions',
  ];
  dataSource = new MatTableDataSource<IUser>();
  users: IUser[] = [];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAllUsers();
  }

  ngOnInit(): void {
    this.findAllUsers();
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private dialogService: DialogService,
    private utilService: UtilService
  ) {}

  //Lista todos os usuários cadastrados
  findAllUsers(): void {
    this.userService.list().subscribe({
      next: (responseAPI) => {
        this.users = responseAPI.content;
        this.dataSource = new MatTableDataSource<IUser>(this.users);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //Editando carros pela tabela
  onEdit(user: IUser): void {
    this.router.navigate(['dashboard/users/edit', user.id]);
  }

  //Excluindo carros pela tabela
  onDelete(user: IUser): void {
    this.dialogService.confirmDialog(user.name).subscribe({
      next: (response) => {
        if (response) {
          this.userService.delete(user.id);
          this.utilService.handleToast(
            'O usuário ' + user.name + ' foi excluído com sucesso.'
          );
          this.findAllUsers();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
