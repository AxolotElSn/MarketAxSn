import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducer'
import { pizzaListReducer } from './reducers/pizzaListReducer'
import { pizzaReducer } from './reducers/pizzaReducer'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
  pizzaList: pizzaListReducer,
  pizza: pizzaReducer,
  cart: cartReducer,
  user: userReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
