// src/store/reducers/salesReducer.ts
export interface SaleItem {
  id: string
  name: string
  price: number
  quantity: number
  date: string
}

export interface SalesState {
  sales: SaleItem[]
}

const initialState: SalesState = {
  sales: JSON.parse(localStorage.getItem('sales') || '[]'), // загрузка из localStorage
}

export const salesReducer = (state = initialState, action: any): SalesState => {
  switch (action.type) {
    case 'sales/addSales': {
      const updatedSales = [...state.sales, ...action.payload]
      localStorage.setItem('sales', JSON.stringify(updatedSales)) // сохраняем в localStorage
      return {
        ...state,
        sales: updatedSales,
      }
    }
    default:
      return state
  }
}
