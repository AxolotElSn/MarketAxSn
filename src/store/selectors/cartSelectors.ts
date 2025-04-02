import { RootState } from '@/types/types'

export const selectCart = (state: RootState) => state.cart.cart

export const selectQuantityById = (id: string) => (state: RootState) => {
  const pizza = state.cart.cart.find((item) => item.pizza.id === id)
  return pizza ? pizza.quantity : 0
}

export const selectTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
