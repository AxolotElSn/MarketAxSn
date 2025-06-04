// src/store/store.ts
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducer'
import { pizzaListReducer } from './reducers/pizzaListReducer'
import { pizzaReducer } from './reducers/pizzaReducer'
import { userReducer } from './reducers/userReducer'
import { salesReducer } from './reducers/salesReducer'

const rootReducer = combineReducers({
  pizzaList: pizzaListReducer,
  pizza: pizzaReducer,
  cart: cartReducer,
  user: userReducer,
  sales: salesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
