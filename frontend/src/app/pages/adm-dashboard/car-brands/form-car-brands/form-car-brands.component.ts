import { Component } from '@angular/core';
import { CarBrandService } from '../../../../services/car-brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarBrand } from 'src/app/models/car-brand';

@Component({
  selector: 'app-form-car-brands',
  templateUrl: './form-car-brands.component.html',
  styleUrls: ['./form-car-brands.component.css'],
})
export class FormCarBrandsComponent {
  public carBrandForm: FormGroup;
  public isEdit: boolean = false;
  public carBrands!: ICarBrand;

  constructor(
    private carBrandService: CarBrandService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.carBrandForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.minLength(2), Validators.maxLength(30)]],
    });
  }

  OnSubmit(): void {
    if (!this.isEdit) {
      this.carBrandService.saveCarBrand(this.carBrandForm.value, 'post');
      this.router.navigate(['dashboard/car-brands/list']);
    } else {
      this.carBrandService.saveCarBrand(this.carBrandForm.value, 'put');
      this.router.navigate(['dashboard/car-brands/list']);
    }
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    this.isEdit = carId !== null;

    if (this.isEdit && carId) {
      const resEdit = this.carBrandService.findCarBrandById(carId);

      resEdit.subscribe({
        next: (APIresponse: ICarBrand) => {
          this.carBrands = APIresponse;
          this.carBrandForm.patchValue({
            id: this.carBrands.id,
            name: this.carBrands.name,
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
