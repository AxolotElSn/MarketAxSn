import { getPizzaList } from '@/api/pizza'
import { ParamsPizzaList, Pizza } from '@/api/pizza/type'
import {
  FETCH_PIZZA_LIST_FAILURE,
  FETCH_PIZZA_LIST_STARTED,
  FETCH_PIZZA_LIST_SUCCESS,
  SET_PAGES,
} from '@/store/actions/pizzaListActions'
import {
  SetErrMsgPizzaList,
  SetPages,
  SetPagesPayload,
  SetPizzaList,
  StartFetchingPizzaList,
} from '@/store/type'
import { AppDispatch } from '@/types/types'

export const startFetching = (): StartFetchingPizzaList => ({
  type: FETCH_PIZZA_LIST_STARTED,
})

export const setPizzaList = (payload: Pizza[]): SetPizzaList => ({
  type: FETCH_PIZZA_LIST_SUCCESS,
  payload,
})

export const setErrorMessage = (payload: string): SetErrMsgPizzaList => ({
  type: FETCH_PIZZA_LIST_FAILURE,
  payload,
})

export const fetchPizzaList = (params: ParamsPizzaList) => {
  return async function (dispatch: AppDispatch) {
    dispatch(startFetching())

    try {
      const response = await getPizzaList({ ...params })
      const { data: pizzsaList, next, prev } = response
      dispatch(setPages({ nextPage: next, prevPage: prev }))
      dispatch(setPizzaList(pizzsaList))
    } catch (error: unknown) {
      if (error instanceof Error) dispatch(setErrorMessage(error.message))
    }
  }
}

export const setPages = (payload: SetPagesPayload): SetPages => ({
  type: SET_PAGES,
  payload,
})
