import { FC } from 'react'
import { useDispatch } from 'react-redux'

import {
  decreasePizzaQuantity,
  increasePizzaQuantity,
} from '@/store/actionCreators/cartActionCreators'

import * as S from './style'
import { QuantityPickerProps } from './type'

export const QuantityPicker: FC<QuantityPickerProps> = ({ id, quantity }) => {
  const dispatch = useDispatch()

  const handleDecrease = () => dispatch(decreasePizzaQuantity(id))
  const handleIncrease = () => dispatch(increasePizzaQuantity(id))

  return (
    <S.Container>
      <S.Button onClick={handleDecrease}>-</S.Button>
      <span>{quantity}</span>
      <S.Button onClick={handleIncrease}>+</S.Button>
    </S.Container>
  )
}
