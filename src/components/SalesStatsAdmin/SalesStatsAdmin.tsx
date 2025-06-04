// src/components/SalesStatsAdmin/SalesStatsAdmin.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { SalesState } from '@/store/reducers/salesReducer'
import { Text } from '@/components/ui/Text/Text'
import * as S from './style'
import { selectUser } from '@/store/selectors/userSelectors'

export const SalesStatsAdmin = () => {
  const user = useSelector(selectUser)
  const sales = useSelector((state: { sales: SalesState }) => state.sales.sales)

  if (!user || user.username !== 'admin') {
    return (
      <Text $fontSize="16px" $color="red500" style={{ margin: '20px' }}>
        Доступ к статистике продаж разрешён только администратору.
      </Text>
    )
  }

  const totalRevenue = sales.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItemsSold = sales.reduce((sum, item) => sum + item.quantity, 0)
  const totalOrders = sales.length

  return (
    <S.Container>
      <Text $fontSize="24px" $color="yellow700" style={{ marginBottom: '20px' }}>
        Статистика продаж
      </Text>

      <S.StatsRow>
        <Text $fontSize="18px">Всего продано товаров:</Text>
        <Text $fontSize="18px" $color="yellow700">{totalItemsSold}</Text>
      </S.StatsRow>

      <S.StatsRow>
        <Text $fontSize="18px">Общий доход:</Text>
        <Text $fontSize="18px" $color="yellow700">{totalRevenue.toFixed(2)} ₽</Text>
      </S.StatsRow>

      <S.StatsRow>
        <Text $fontSize="18px">Всего заказов:</Text>
        <Text $fontSize="18px" $color="yellow700">{totalOrders}</Text>
      </S.StatsRow>
    </S.Container>
  )
}
