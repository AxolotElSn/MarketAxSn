import {
  FETCH_PIZZA_FAILURE,
  FETCH_PIZZA_STARTED,
  FETCH_PIZZA_SUCCESS,
} from '@/store/actions/pizzaActions'
import { ActionPizza, InitialStatePizza } from '@/store/type'

const initialState: InitialStatePizza = {
  pizza: {
    id: '',
    name: '',
    ingredients: '',
    size: [],
    price: 0,
    vegetarian: false,
    image: '',
    description: '',
    rating: 0,
    isSale: false,
    isSoldOut: false,
  },
  isLoading: false,
  errorMessage: '',
}

export function pizzaReducer(state = initialState, action: ActionPizza) {
  switch (action.type) {
    case FETCH_PIZZA_STARTED:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_PIZZA_SUCCESS:
      return {
        ...state,
        pizza: action.payload,
        isLoading: false,
        errorMessage: '',
      }

    case FETCH_PIZZA_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      }

    default:
      return state
  }
}
