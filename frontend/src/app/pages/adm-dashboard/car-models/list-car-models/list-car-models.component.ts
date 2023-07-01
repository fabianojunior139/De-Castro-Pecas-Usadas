import { UtilService } from './../../../../services/util.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICarModel } from './../../../../models/car-model';
import { CarModelService } from './../../../../services/car-model.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-list-car-models',
  templateUrl: './list-car-models.component.html',
  styleUrls: ['./list-car-models.component.css'],
})
export class ListCarModelsComponent {
  readonly displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<ICarModel>();
  carModels: ICarModel[] = [];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAllCarModels();
  }

  constructor(
    private carModelService: CarModelService,
    private router: Router,
    private dialogService: DialogService,
    private utilService: UtilService
  ) {}

  //Lista todos os modelos de carros cadastrados
  findAllCarModels(): void {
    this.carModelService.list().subscribe({
      next: (responseAPI) => {
        this.carModels = responseAPI.content;
        this.dataSource = new MatTableDataSource<ICarModel>(this.carModels);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //Editando modelos pela tabela
  onEdit(carModel: ICarModel): void {
    this.router.navigate(['dashboard/car-models/edit', carModel.id]);
  }

  //Excluindo modelo pela tabela
  onDelete(carModel: ICarModel): void {
    this.dialogService.confirmDialog(carModel.model).subscribe({
      next: (response) => {
        if (response) {
          this.carModelService.delete(carModel.id);
          this.utilService.handleToast(
            carModel.model + ' excluído com sucesso.'
          );
          this.findAllCarModels();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
