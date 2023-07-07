import { UtilService } from './../../../../services/util.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICar } from './../../../../models/car';
import { CarService } from './../../../../services/car.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css'],
})
export class ListCarsComponent implements AfterViewInit {
  readonly displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<ICar>();
  cars: ICar[] = [];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAllCars();
  }

  ngOnInit(): void {
    this.findAllCars();
  }

  constructor(
    private carService: CarService,
    private router: Router,
    private dialogService: DialogService,
    private utilService: UtilService
  ) {}

  //Lista todos os carros cadastrados
  findAllCars(): void {
    this.carService.list().subscribe({
      next: (responseAPI) => {
        this.cars = responseAPI.content;
        this.dataSource = new MatTableDataSource<ICar>(this.cars);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ////Editando carros pela tabela
  onEdit(car: ICar): void {
    this.router.navigate(['dashboard/cars/edit', car.id]);
  }

  //Excluindo carros pela tabela
  onDelete(car: ICar): void {
    this.dialogService.confirmDialog(car.name).subscribe({
      next: (response) => {
        if (response) {
          this.carService.delete(car.id);
          this.utilService.handleToast(car.name + ' excluído com sucesso.');
          this.findAllCars();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
