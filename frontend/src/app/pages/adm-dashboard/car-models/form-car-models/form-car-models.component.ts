import { Component } from '@angular/core';
import { CarModelService } from '../../../../services/car-model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarModel } from 'src/app/models/car-model';

@Component({
  selector: 'app-form-car-models',
  templateUrl: './form-car-models.component.html',
  styleUrls: ['./form-car-models.component.css'],
})
export class FormCarModelsComponent {
  public carModelForm: FormGroup;
  public isEdit: boolean = false;
  public carModels!: ICarModel;

  constructor(
    private carModelService: CarModelService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.carModelForm = this.formBuilder.group({
      id: [null],
      model: [null, [Validators.minLength(2), Validators.maxLength(30)]],
    });
  }

  OnSubmit(): void {
    if (!this.isEdit) {
      this.carModelService.saveCarModel(this.carModelForm.value, 'post');
      this.router.navigate(['dashboard/car-models/list']);
    } else {
      this.carModelService.saveCarModel(this.carModelForm.value, 'put');
      this.router.navigate(['dashboard/car-models/list']);
    }
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    this.isEdit = carId !== null;

    if (this.isEdit && carId) {
      const resEdit = this.carModelService.findCarModelById(carId);

      resEdit.subscribe({
        next: (APIresponse: ICarModel) => {
          this.carModels = APIresponse;
          this.carModelForm.patchValue({
            id: this.carModels.id,
            model: this.carModels.model,
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
