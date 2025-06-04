// src/components/OrderComplete/OrderComplete.tsx
import React from 'react'
import { useDispatch } from 'react-redux'
import { addSalesWithMeta } from '@/store/actionCreators/salesActionCreators'

type SoldItem = {
  id: string                // Добавили id
  name: string
  price: number
  quantity: number
}

interface Props {
  soldItems: SoldItem[]
}

export const OrderComplete: React.FC<Props> = ({ soldItems }) => {
  const dispatch = useDispatch()

  const handleCompleteOrder = () => {
    dispatch(addSalesWithMeta(soldItems))  // Теперь работает корректно
    alert('Заказ оформлен, статистика обновлена!')
  }

  return (
    <button onClick={handleCompleteOrder}>
      Оформить заказ
    </button>
  )
}
