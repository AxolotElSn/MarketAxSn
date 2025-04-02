import {
  FETCH_PIZZA_LIST_FAILURE,
  FETCH_PIZZA_LIST_STARTED,
  FETCH_PIZZA_LIST_SUCCESS,
  SET_PAGES,
} from '@/store/actions/pizzaListActions'
import { ActionPizzaList, InitialStatePizzaList } from '@/store/type'

const initialState: InitialStatePizzaList = {
  pizzaList: [],
  isLoading: false,
  errorMessage: '',
  nextPage: 0,
  prevPage: 0,
}

export function pizzaListReducer(
  state = initialState,
  action: ActionPizzaList,
) {
  switch (action.type) {
    case FETCH_PIZZA_LIST_STARTED:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_PIZZA_LIST_SUCCESS:
      return {
        ...state,
        pizzaList: action.payload,
        isLoading: false,
        errorMessage: '',
      }

    case FETCH_PIZZA_LIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      }

    case SET_PAGES:
      return {
        ...state,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
      }

    default:
      return state
  }
}
