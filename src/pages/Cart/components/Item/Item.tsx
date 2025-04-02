import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { QuantityPicker } from '@/components/QuantityPicker/QuantityPicker'
import { Button } from '@/components/ui/Button/Button'
import { Row } from '@/components/ui/Row/Row'
import { Text } from '@/components/ui/Text/Text'
import { deletePizza } from '@/store/actionCreators/cartActionCreators'

import * as S from './style'
import { ItemProps } from './type'

export const Item: FC<ItemProps> = ({ item }) => {
  const dispatch = useDispatch()

  const { pizza, quantity } = item
  const totalPrice = item.pizza.price * item.quantity

  const handleClick = () => dispatch(deletePizza(pizza.id))

  return (
    <S.ListItem>
      <Row type="horizontal" $alignItems="center">
        <Text $fontSize="14px">{pizza.name}</Text>
        <S.Box>
          <Text $fontSize="14px">{totalPrice}₽</Text>
          <QuantityPicker id={pizza.id} quantity={quantity} />
          <Button onClick={handleClick}>Удалить</Button>
        </S.Box>
      </Row>
    </S.ListItem>
  )
}
