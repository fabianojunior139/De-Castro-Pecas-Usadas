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
        label: 'Estoque',
      },
      {
        routerLink: 'stock/create',
        label: 'Registro de Peças',
      },
      {
        routerLink: 'stock/update',
        label: 'Atualização de Peça',
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
        label: 'Registro de Vendas',
      },
      {
        routerLink: 'sales/update',
        label: 'Atualizar Venda',
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
        label: 'Anúncios',
      },
      {
        routerLink: 'announcements/create',
        label: 'Cadastrar Anúncios',
      },
      {
        routerLink: 'announcements/update',
        label: 'Atualizar Anúncio',
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
      {
        routerLink: 'cars/update',
        label: 'Atualizar Carro',
      },
    ],
  },
  {
    routerLink: 'cars-models',
    icon: faTruck,
    label: 'Modelos',
    items: [
      {
        routerLink: 'cars-models/list',
        label: 'Lista de Modelos',
      },
      {
        routerLink: 'cars-models/create',
        label: 'Cadastrar Modelo',
      },
      {
        routerLink: 'cars-models/update',
        label: 'Atualizar Mddelo',
      },
    ],
  },
  {
    routerLink: 'cars-brands',
    icon: faCaravan,
    label: 'Marcas',
    items: [
      {
        routerLink: 'cars-brands/list',
        label: 'Lista de Marcas',
      },
      {
        routerLink: 'cars-brands/create',
        label: 'Cadastrar Marcas',
      },
      {
        routerLink: 'cars-brands/update',
        label: 'Atualizar Marcas',
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
        label: 'Lsta de Usuários',
      },
      {
        routerLink: 'users/create',
        label: 'Cadastro',
      },
      {
        routerLink: 'users/update',
        label: 'Atualizar dados',
      },
    ],
  },
  {
    routerLink: '../login',
    icon: faRightFromBracket,
    label: 'Logout',
  },
];
