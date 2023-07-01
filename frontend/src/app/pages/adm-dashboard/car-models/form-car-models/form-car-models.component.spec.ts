import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarModelsComponent } from './form-car-models.component';

describe('FormCarModelsComponent', () => {
  let component: FormCarModelsComponent;
  let fixture: ComponentFixture<FormCarModelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCarModelsComponent]
    });
    fixture = TestBed.createComponent(FormCarModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
