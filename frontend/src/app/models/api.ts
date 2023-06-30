export interface ResponseAPI {
  content: any[];
  pageable: {
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IPaginator {
  totalElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
}

export type Method = 'post' | 'put';
