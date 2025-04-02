export interface Pizza {
  id: string
  name: string
  ingredients: string
  size: string[] | null
  price: number
  vegetarian: boolean
  image: string
  description: string
  rating: number
  isSale: boolean
  isSoldOut: boolean
}

export type PizzaBody = Omit<Pizza, 'id'>

export interface ResponsePizzaList {
  data: Pizza[]
  next: number | null
  prev: number | null
}

export interface ParamsPizzaList {
  page: number
  limit: number
  search: string
}
