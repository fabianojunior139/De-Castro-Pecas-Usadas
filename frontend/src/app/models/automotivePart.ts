export interface ResponseAPI {
  content: IParts[];
  pageable: IPageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: ISort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}


export interface IParts {
  id?: number;
  name: string;
  stock_quantity: number;
  average_price: number;
  year: number;
  observation: string;
  category: string;
  car: string;
  car_brand: string;
  car_model: string;
  user: string;
}

interface IPageable {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageSize: number;
  pageNumber: number;
  unpaged: boolean;
  paged: boolean;
}

interface ISort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

