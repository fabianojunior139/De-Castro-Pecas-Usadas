export interface IToken {
  token: string
}

export interface Account {
  email: string,
  password: string,
}

export interface SideNavToggle { 
  screenWidth: number;
  collapsed: boolean
}