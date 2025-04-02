import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducer'
import { pizzaListReducer } from './reducers/pizzaListReducer'
import { pizzaReducer } from './reducers/pizzaReducer'

const rootReducer = combineReducers({
  pizzaList: pizzaListReducer,
  pizza: pizzaReducer,
  cart: cartReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
