import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarBrandsComponent } from './form-car-brands.component';

describe('FormCarBrandsComponent', () => {
  let component: FormCarBrandsComponent;
  let fixture: ComponentFixture<FormCarBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCarBrandsComponent]
    });
    fixture = TestBed.createComponent(FormCarBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
