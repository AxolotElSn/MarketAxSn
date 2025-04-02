import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { ApiMethods, BASE_URL } from './consts'

export const $api = axios.create({
  baseURL: BASE_URL,
})

export async function sendRequest<RequestData, ResponseData>(
  options: AxiosRequestConfig & {
    method: ApiMethods
    data?: RequestData
  },
) {
  const { data }: AxiosResponse<ResponseData> = await $api({
    url: options.url,
    params: options.params,
    method: options.method,
    data: options.data,
  })

  return data
}
