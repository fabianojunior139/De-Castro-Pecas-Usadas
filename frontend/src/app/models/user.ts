export interface IUser {
  id: number
  name: string
  email: string
  address: Address
}

export interface Address {
  address: string
  number: number
  neighborhood: string
  city: string
  uf: string
  complement?: string
  zip_code: string
}
