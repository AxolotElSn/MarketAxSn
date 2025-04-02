import { sendRequest } from '@/api/api'
import { ApiMethods, URL_PIZZA } from '@/api/consts'

import { handleError } from './helpers.ts/handleError'
import { ParamsPizzaList, Pizza, PizzaBody, ResponsePizzaList } from './type'

export const getPizzaList = async (params: ParamsPizzaList) => {
  try {
    const response = await sendRequest<null, ResponsePizzaList>({
      url: URL_PIZZA,
      method: ApiMethods.GET,
      params: {
        _page: params.page,
        _per_page: params.limit,
        name: params.search,
      },
    })

    return response
  } catch (error) {
    handleError(error)
  }
}

export const getPizzaById = async (id: string) => {
  try {
    const response = await sendRequest<null, Pizza>({
      url: `${URL_PIZZA}/${id}`,
      method: ApiMethods.GET,
    })

    return response
  } catch (error) {
    handleError(error)
  }
}

export const createPizza = async (body: PizzaBody) => {
  try {
    const response = await sendRequest<PizzaBody, Pizza>({
      url: URL_PIZZA,
      method: ApiMethods.POST,
      data: body,
    })

    return response
  } catch (error) {
    handleError(error)
  }
}

export const editPizza = async (id: string, body: PizzaBody) => {
  try {
    const response = await sendRequest<PizzaBody, Pizza>({
      url: `${URL_PIZZA}/${id}`,
      method: ApiMethods.PUT,
      data: body,
    })

    return response
  } catch (error) {
    handleError(error)
  }
}

export const deletePizza = async (id: string) => {
  try {
    const response = await sendRequest<null, Pizza>({
      url: `${URL_PIZZA}/${id}`,
      method: ApiMethods.DELETE,
    })

    return response
  } catch (error) {
    handleError(error)
  }
}
