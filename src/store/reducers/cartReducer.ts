import { ActionCart, InitialStateCart } from '@/store/type'

import {
  ADD_PIZZA,
  CLEAR_CART,
  DECREASE_PIZZA_QUANTITY,
  DELETE_PIZZA,
  INCREASE_PIZZA_QUANTITY,
} from '../actions/cartActions'

const initialState: InitialStateCart = {
  cart: [],
}

export function cartReducer(state = initialState, action: ActionCart) {
  switch (action.type) {
    case ADD_PIZZA:
      return { ...state, cart: [...state.cart, action.payload] }

    case DELETE_PIZZA:
      return {
        ...state,
        cart: [...state.cart].filter(
          (item) => item.pizza.id !== action.payload,
        ),
      }

    case INCREASE_PIZZA_QUANTITY: {
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.pizza.id === action.payload
              ? { ...item, quantity: ++item.quantity }
              : item,
          ),
        ],
      }
    }

    case DECREASE_PIZZA_QUANTITY: {
      const newState = { ...state }
      const item = newState.cart.find(
        (item) => item.pizza.id === action.payload,
      )
      item.quantity--

      if (!item.quantity) {
        return {
          ...state,
          cart: [...state.cart].filter(
            (item) => item.pizza.id !== action.payload,
          ),
        }
      }

      return {
        ...state,
        cart: [...newState.cart],
      }
    }

    case CLEAR_CART:
      return { ...state, cart: [] }

    default:
      return state
  }
}
