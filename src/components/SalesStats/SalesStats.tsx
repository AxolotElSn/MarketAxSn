// src/components/SalesStats/SalesStats.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { SaleItem } from '@/store/reducers/salesReducer'

export const SalesStats = () => {
  const sales = useSelector<RootState, SaleItem[]>(state => state.sales.sales)

  const totalRevenue = sales.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItemsSold = sales.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div style={{ padding: 20 }}>
      <h2>Статистика продаж</h2>
      <p>Всего продано товаров: {totalItemsSold}</p>
      <p>Общий доход: {totalRevenue.toFixed(2)} ₽</p>
    </div>
  )
}
