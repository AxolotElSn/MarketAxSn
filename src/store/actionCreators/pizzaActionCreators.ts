import { getPizzaById } from '@/api/pizza'
import { Pizza } from '@/api/pizza/type'
import {
  FETCH_PIZZA_FAILURE,
  FETCH_PIZZA_STARTED,
  FETCH_PIZZA_SUCCESS,
} from '@/store/actions/pizzaActions'
import { SetErrMsgPizza, SetPizza, StartFetchingPizza } from '@/store/type'
import { AppDispatch } from '@/types/types'

export const startFetching = (): StartFetchingPizza => ({
  type: FETCH_PIZZA_STARTED,
})

export const setPizza = (payload: Pizza): SetPizza => ({
  type: FETCH_PIZZA_SUCCESS,
  payload,
})

export const setErrorMessage = (payload: string): SetErrMsgPizza => ({
  type: FETCH_PIZZA_FAILURE,
  payload,
})

export const fetchPizza = (pizzaId: string) => {
  return async function (dispatch: AppDispatch) {
    dispatch(startFetching())

    try {
      const pizza = await getPizzaById(pizzaId)
      dispatch(setPizza(pizza))
    } catch (error: unknown) {
      if (error instanceof Error) dispatch(setErrorMessage(error.message))
    }
  }
}
