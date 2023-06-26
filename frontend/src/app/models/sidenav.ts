export interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

export interface INavbarData {
  routerLink: string;
  icon?: any;
  label: string;
  expanded?: boolean;
  items?: INavbarData[];
}
