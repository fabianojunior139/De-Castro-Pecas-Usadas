import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCaravan } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { INavbarData } from 'src/app/models/sidenav';


export const navbarData: INavbarData[] = [
  {
    routerLink: 'stock',
    icon: faWarehouse,
    label: 'Estoque',
    items: [
      {
        routerLink: 'stock/list',
        label: 'Lista de peças',
      },
      {
        routerLink: 'stock/create',
        label: 'Cadastrar peças',
      },
    ],
  },
  {
    routerLink: 'sales',
    icon: faMoneyCheckDollar,
    label: 'Vendas',
    items: [
      {
        routerLink: 'sales/list',
        label: 'Histórico de Vendas',
      },
      {
        routerLink: 'sales/create',
        label: 'Cadastrar Vendas',
      },
    ],
  },
  {
    routerLink: 'announcements',
    icon: faBullhorn,
    label: 'Anúncios',
    items: [
      {
        routerLink: 'announcements/list',
        label: 'Lista de Anúncios',
      },
      {
        routerLink: 'announcements/create',
        label: 'Cadastrar Anúncios',
      },
    ],
  },
  {
    routerLink: 'cars',
    icon: faCar,
    label: 'Carros',
    items: [
      {
        routerLink: 'cars/list',
        label: 'Lista de Carros',
      },
      {
        routerLink: 'cars/create',
        label: 'Cadastrar Carro',
      },
    ],
  },
  {
    routerLink: 'car-models',
    icon: faTruck,
    label: 'Modelos',
    items: [
      {
        routerLink: 'car-models/list',
        label: 'Lista de Modelos',
      },
      {
        routerLink: 'car-models/create',
        label: 'Cadastrar Modelos',
      },
    ],
  },
  {
    routerLink: 'car-brands',
    icon: faCaravan,
    label: 'Marcas',
    items: [
      {
        routerLink: 'car-brands/list',
        label: 'Lista de Marcas',
      },
      {
        routerLink: 'car-brands/create',
        label: 'Cadastrar Marcas',
      },
    ],
  },
  {
    routerLink: 'users',
    icon: faUser,
    label: 'Usuários',
    items: [
      {
        routerLink: 'users/list',
        label: 'Lista de Usuários',
      },
      {
        routerLink: 'users/create',
        label: 'Cadastro de Usuários',
      },
    ],
  },
  {
    routerLink: '../login',
    icon: faRightFromBracket,
    label: 'Logout',
  },
];
