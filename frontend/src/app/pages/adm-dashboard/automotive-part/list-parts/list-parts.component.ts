import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IParts } from 'src/app/models/automotivePart';
import { IFilter } from 'src/app/models/filter';
import { AutomotivePart } from 'src/app/services/automotive-part.service';

@Component({
  selector: 'app-list-parts',
  templateUrl: './list-parts.component.html',
  styleUrls: ['./list-parts.component.css'],
})
export class ListPartsComponent implements OnInit {
  isFixed: boolean = false;
  automotivePartList: IParts[] = [];
  filteredParts: any[] = [];
  totalElements: number = 0;
  years: number[] = [];

  //Inicializando os campos do formulário
  public formFilter = new FormGroup({
    filterName: new FormControl(''),
    filterCar: new FormControl(''),
    filterCarBrand: new FormControl(''),
    filterCarModel: new FormControl(''),
    filterYear: new FormControl(0),
  });

  //Inicializando a variável que controlará os filtros
  filter: IFilter = {
    name: '',
    car: '',
    car_model: '',
    car_brand: '',
    year: 0,
  };

  constructor(private automotivePart: AutomotivePart) {
    //inicializando a variável year com os últimos 50 anos partindo da data atual
    const anoAtual = new Date().getFullYear();
    this.years = Array.from({ length: 50 }, (v, i) => anoAtual - i);
  }

  //Pegando todas as peças que vem do banco de dados
  getAllAutomotiveParts(): void {
    const listParts = this.automotivePart.getAllAutomotivesParts();

    listParts.subscribe({
      next: (automotivePartList) => {
        this.automotivePartList = automotivePartList.content;
        this.filteredParts = automotivePartList.content;
        this.totalElements = automotivePartList.totalElements;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //Resetando as informações dos Inputs e fazendo uma nova chamada à API
  formReset(): void {
    this.formFilter.reset({
      filterName: '',
      filterCar: '',
      filterCarBrand: '',
      filterCarModel: '',
      filterYear: 0,
    });
    this.getAllAutomotiveParts();
  }

  //Função utilizada para realizar os filtros da página
  updateFilter() {
    this.filteredParts = this.automotivePartList.filter((part) => {
      if (
        this.filter.name &&
        !part.name.toLowerCase().includes(this.filter.name.toLowerCase())
      ) {
        return false;
      }

      if (
        this.filter.car &&
        !part.car.toLowerCase().includes(this.filter.car.toLowerCase())
      ) {
        return false;
      }

      if (this.filter.year) {
        let year = parseInt(this.filter.year);

        if (!(part.year == year)) {
          return false;
        }
      }

      if (
        this.filter.car_model &&
        !part.car_model
          .toLowerCase()
          .includes(this.filter.car_model.toLowerCase())
      ) {
        return false;
      }

      if (
        this.filter.car_brand &&
        !part.car_brand
          .toLowerCase()
          .includes(this.filter.car_brand.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }

  //Função utilizada para aplicar a classe position stick a um elemente após a barra de rolagem atingir 62px
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isFixed = scrollPosition >= 62;
  }

  //Ao iniciar o componente chamada uma chamada à API de todos os registros cadastrados na base de dados
  ngOnInit() {
    this.getAllAutomotiveParts();
  }
}
