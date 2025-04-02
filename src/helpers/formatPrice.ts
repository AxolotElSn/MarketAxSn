import { REGEX_FIND_FOR_DEVIDER } from '@/consts/regExp'

export const formatPrice = (price: number) => {
  return price.toString().replace(REGEX_FIND_FOR_DEVIDER, ' ')
}
