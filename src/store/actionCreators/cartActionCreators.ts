import {
  ADD_PIZZA,
  CLEAR_CART,
  DECREASE_PIZZA_QUANTITY,
  DELETE_PIZZA,
  INCREASE_PIZZA_QUANTITY,
} from '../actions/cartActions'
import {
  AddPizza,
  ClearCart,
  DecreasePizzaQuantity,
  DeletePizza,
  IncreasePizzaQuantity,
  PizzaCart,
} from '../type'

export const addPizza = (pizzaCart: PizzaCart): AddPizza => ({
  type: ADD_PIZZA,
  payload: pizzaCart,
})

export const deletePizza = (id: string): DeletePizza => ({
  type: DELETE_PIZZA,
  payload: id,
})

export const increasePizzaQuantity = (id: string): IncreasePizzaQuantity => ({
  type: INCREASE_PIZZA_QUANTITY,
  payload: id,
})

export const decreasePizzaQuantity = (id: string): DecreasePizzaQuantity => ({
  type: DECREASE_PIZZA_QUANTITY,
  payload: id,
})

export const clearCart = (): ClearCart => ({
  type: CLEAR_CART,
})
