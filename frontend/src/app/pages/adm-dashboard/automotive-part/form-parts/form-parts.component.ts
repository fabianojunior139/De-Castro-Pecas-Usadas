import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-parts',
  templateUrl: './form-parts.component.html',
  styleUrls: ['./form-parts.component.css'],
})
export class FormPartsComponent {
  public partForm: FormGroup;
  public isEdit: boolean = false;
  years: number[] = [];

  constructor(private formBuilder: FormBuilder) {
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
      description: [null, [Validators.required, Validators.maxLength(500)]],
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
}
