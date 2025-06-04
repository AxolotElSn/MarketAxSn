import { Dispatch } from 'redux'
import { SaleItem } from '@/store/reducers/salesReducer'

export const addSales = (items: SaleItem[]) => ({
  type: 'sales/addSales',
  payload: items,
})

export const addSalesWithMeta = (items: Omit<SaleItem, 'date'>[]) => {
  const itemsWithDate: SaleItem[] = items.map((item) => ({
    ...item,
    date: new Date().toISOString(),
    id: item.id ?? Math.random().toString(36).substr(2, 9),
  }))

  return (dispatch: Dispatch) => {
    dispatch(addSales(itemsWithDate))
  }
}
