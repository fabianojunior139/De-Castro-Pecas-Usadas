import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCaravan } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const navbarData = [
  {
    routerLink: 'stock',
    icon: faWarehouse,
    label: 'Controle de Estoque',
  },
  {
    routerLink: 'sales',
    icon: faMoneyCheckDollar,
    label: 'Registro de Vendas',
  },
  {
    routerLink: 'announcements',
    icon: faBullhorn,
    label: 'Anúncios',
  },
  {
    routerLink: 'cars',
    icon: faCar,
    label: 'Carros',
  },
  {
    routerLink: 'cars-models',
    icon: faTruck,
    label: 'Modelos',
  },
  {
    routerLink: 'cars-brands',
    icon: faCaravan,
    label: 'Marcas',
  },
  {
    routerLink: 'users',
    icon: faUser,
    label: 'Usuários',
  },
];
