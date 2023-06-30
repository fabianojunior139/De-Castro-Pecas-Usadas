import { Component } from '@angular/core';
import { UtilService } from '../../../../services/util.service';
import { CarService } from '../../../../services/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICar } from 'src/app/models/car';

@Component({
  selector: 'app-form-cars',
  templateUrl: './form-cars.component.html',
  styleUrls: ['./form-cars.component.css'],
})
export class FormCarsComponent {
  public carForm: FormGroup;
  public isEdit: boolean = false;
  public cars!: ICar;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.carForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.minLength(2), Validators.maxLength(30)]],
    });
  }

  OnSubmit(): void {
    if (!this.isEdit) {
      this.carService.saveCar(this.carForm.value, 'post');
      this.router.navigate(['dashboard/cars/list']);
    } else {
      this.carService.saveCar(this.carForm.value, 'put');
      this.router.navigate(['dashboard/cars/list']);
    }
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    this.isEdit = carId !== null;

    if (this.isEdit && carId) {
      const resEdit = this.carService.findCarById(carId);

      resEdit.subscribe({
        next: (APIresponse) => {
          this.cars = APIresponse;
          this.carForm.patchValue({
            id: this.cars.id,
            name: this.cars.name,
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
