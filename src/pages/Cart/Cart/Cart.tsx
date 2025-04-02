import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/Button/Button'
import { Text } from '@/components/ui/Text/Text'
import { useAppSelector } from '@/hooks/useAppSelector'
import { clearCart } from '@/store/actionCreators/cartActionCreators'
import { selectCart } from '@/store/selectors/cartSelectors'

import { EmptyCart } from '../components/EmptyCart/EmptyCart'
import { Item } from '../components/Item/Item'
import * as S from './style'

export const Cart = () => {
  const cart = useAppSelector(selectCart)
  const dispatch = useDispatch()

  const username = Cookies.get('username')
  const isEmptyCart = !cart.length

  const handleOrder = () => {}

  const handleClear = () => dispatch(clearCart())

  if (isEmptyCart) return <EmptyCart />

  return (
    <S.Container>
      {username && (
        <Text $fontSize="14px" $color="yellow700">
          {username}, ваш заказ:
        </Text>
      )}

      <S.List>
        {cart.map((item) => (
          <Item item={item} key={item.pizza.id} />
        ))}
      </S.List>

      <S.ButtonWrapper>
        <Button onClick={handleClear} $variation="secondary">
          Очистить
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
