import { Dispatch } from 'redux'
import { SaleItem } from '@/store/reducers/salesReducer'

export const completeOrder = (items: SaleItem[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'sales/addSales',
      payload: items,
    })
  }
}
