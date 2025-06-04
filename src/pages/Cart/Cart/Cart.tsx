// src/pages/Cart/Cart/Cart.tsx
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/Button/Button'
import { Text } from '@/components/ui/Text/Text'
import { useAppSelector } from '@/hooks/useAppSelector'
import { clearCart } from '@/store/actionCreators/cartActionCreators'
import { selectCart } from '@/store/selectors/cartSelectors'
import { completeOrder } from '@/store/actions/salesActions'
import { SaleItem } from '@/store/reducers/salesReducer'

import { EmptyCart } from '../components/EmptyCart/EmptyCart'
import { Item } from '../components/Item/Item'
import * as S from './style'

import { AdminStatsButton } from '@/components/AdminStatsButton/AdminStatsButton'  // импорт кнопки

export const Cart = () => {
  const cart = useAppSelector(selectCart)
  const dispatch = useDispatch()

  const username = Cookies.get('username')
  const isEmptyCart = !cart.length

  const handleOrder = () => {
    if (isEmptyCart) return

    const salesItems: SaleItem[] = cart.map(({ pizza, quantity }) => ({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      quantity,
      date: new Date().toISOString(),
    }))

    dispatch(completeOrder(salesItems))
    dispatch(clearCart())
    alert('Спасибо за заказ! Статистика обновлена.')
  }

  const handleClear = () => dispatch(clearCart())

  return (
    <S.Container>
      {username && (
        <Text $fontSize="14px" $color="yellow700" style={{ marginBottom: 10 }}>
          {username}, ваш заказ:
        </Text>
      )}

      {isEmptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <S.List>
            {cart.map((item) => (
              <Item item={item} key={item.pizza.id} />
            ))}
          </S.List>

          <S.ButtonWrapper>
            <Button onClick={handleClear} $variation="secondary">
              Очистить
            </Button>
            <Button onClick={handleOrder}>Оформить заказ</Button>
          </S.ButtonWrapper>
        </>
      )}


      <div style={{ marginTop: 20 }}>
        <AdminStatsButton />
      </div>
    </S.Container>
  )
}
