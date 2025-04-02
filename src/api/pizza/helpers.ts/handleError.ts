import axios, { AxiosError } from 'axios'

export const handleError = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error))
    throw new Error(`${error.message}, код ошибки: ${error.response.status}`)

  throw new Error(error?.message || 'Что-то пошло не так...')
}
