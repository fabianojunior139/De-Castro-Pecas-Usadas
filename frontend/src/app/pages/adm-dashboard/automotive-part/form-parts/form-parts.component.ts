import { AutomotivePart } from './../../../../services/automotive-part.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IParts } from 'src/app/models/automotivePart';
import { ICar } from 'src/app/models/car';
import { ICarBrand } from 'src/app/models/car-brand';
import { ICarModel } from 'src/app/models/car-model';
import { CarBrandService } from 'src/app/services/car-brand.service';
import { CarModelService } from 'src/app/services/car-model.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-form-parts',
  templateUrl: './form-parts.component.html',
  styleUrls: ['./form-parts.component.css'],
})
export class FormPartsComponent implements OnInit {
  public partForm: FormGroup;
  public isEdit: boolean = false;
  public part!: IParts;
  years: number[] = [];
  cars: ICar[] = [];
  carBrands: ICarBrand[] = [];
  carModels: ICarModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private carBrandService: CarBrandService,
    private carModelService: CarModelService,
    private partService: AutomotivePart,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const anoAtual = new Date().getFullYear();
    this.years = Array.from({ length: 50 }, (v, i) => anoAtual - i);
    this.partForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.minLength(2), Validators.maxLength(30)]],
      stock_quantity: [null, [Validators.required, Validators.maxLength(6)]],
      average_price: [null, [Validators.required, Validators.maxLength(20)]],
      year: [
        null,
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      observation: [null, [Validators.maxLength(500)]],
      category: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(12),
        ],
      ],
      car_id: [null, [Validators.required, Validators.maxLength(1)]],
      car_brand_id: [null, [Validators.required, Validators.maxLength(1)]],
      car_model_id: [null, [Validators.required, Validators.maxLength(1)]],
      user_id: [1],
    });
  }

  //Rodando as funções ao iniciar a página
  ngOnInit(): void {
    this.findAllCars();
    this.findAllCarBrands();
    this.findAllCarModels();

    const partId = this.route.snapshot.paramMap.get('id');
    this.isEdit = partId !== null;

    if (this.isEdit && partId) {
      const resEdit = this.partService.findPartByIdToEdit(partId);

      resEdit.subscribe({
        next: (APIresponse: IParts) => {
          this.part = APIresponse;
          this.partForm.patchValue({
            id: this.part.id,
            name: this.part.name,
            stock_quantity: this.part.stock_quantity,
            average_price: this.part.average_price,
            year: this.part.year,
            observation: this.part.observation,
            category: this.part.category,
            car_id: this.part.car,
            car_brand_id: this.part.car_brand,
            car_model_id: this.part.car_model,
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  //Obtendo toda a lista de carros do banco de dados
  findAllCars(): void {
    this.carService.list().subscribe({
      next: (ResponseAPI) => {
        this.cars = ResponseAPI.content;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //Obetendo toda a lista de marcas do banco de dados
  findAllCarBrands(): void {
    this.carBrandService.list().subscribe({
      next: (ResponseAPI) => {
        this.carBrands = ResponseAPI.content;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //Obtendo toda a lista de modelos do banco de dados
  findAllCarModels(): void {
    this.carModelService.list().subscribe({
      next: (ResponseAPI) => {
        this.carModels = ResponseAPI.content;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(): void {
    const part: IParts = this.partForm.getRawValue();
    if (!this.isEdit) {
      this.partService.savePart(part, 'post');
    } else {
      this.partService.savePart(part, 'put');
      const url = 'dashboard/stock/informations/' + this.part.id;
      this.router.navigate([url]);
    }
  }
}
