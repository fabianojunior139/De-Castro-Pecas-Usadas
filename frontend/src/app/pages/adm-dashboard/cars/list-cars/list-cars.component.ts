import { MatTableDataSource } from '@angular/material/table';
import { ICar } from './../../../../models/car';
import { CarService } from './../../../../services/car.service';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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

  @Output() edit = new EventEmitter(false);

  constructor(private carService: CarService, private router: Router) {}

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

  onEdit(car: ICar): void {
    this.router.navigate(['dashboard/cars/edit', car.id]);
  }

  onDelete(car: ICar): void {}
}
