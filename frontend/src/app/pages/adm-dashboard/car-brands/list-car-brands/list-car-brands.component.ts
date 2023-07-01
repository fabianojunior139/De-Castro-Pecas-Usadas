import { ICarBrand } from './../../../../models/car-brand';
import { UtilService } from './../../../../services/util.service';
import { MatTableDataSource } from '@angular/material/table';
import { CarBrandService } from './../../../../services/car-brand.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-list-car-brands',
  templateUrl: './list-car-brands.component.html',
  styleUrls: ['./list-car-brands.component.css'],
})
export class ListCarBrandsComponent {
  readonly displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<ICarBrand>();
  carBrand: ICarBrand[] = [];
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.findAllCarBrands();
  }

  ngOnInit(): void {
    this.findAllCarBrands();
  }

  constructor(
    private carBrandService: CarBrandService,
    private router: Router,
    private dialogService: DialogService,
    private utilService: UtilService
  ) {}

  //Lista todos as marcas cadastradas
  findAllCarBrands(): void {
    this.carBrandService.list().subscribe({
      next: (responseAPI) => {
        this.carBrand = responseAPI.content;
        this.dataSource = new MatTableDataSource<ICarBrand>(this.carBrand);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //Editando marcas pela tabela
  onEdit(carBrand: ICarBrand): void {
    this.router.navigate(['dashboard/car-brands/edit', carBrand.id]);
  }

  //Excluindo marcas pela tabela
  onDelete(carBrand: ICarBrand): void {
    this.dialogService.confirmDialog(carBrand.name).subscribe({
      next: (response) => {
        if (response) {
          this.carBrandService.delete(carBrand.id);
          this.utilService.handleToast(
            carBrand.name + ' excluído com sucesso.'
          );
          this.findAllCarBrands();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
