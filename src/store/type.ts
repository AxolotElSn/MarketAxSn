import { Pizza } from '@/api/pizza/type'

import {
  ADD_PIZZA,
  CLEAR_CART,
  DECREASE_PIZZA_QUANTITY,
  DELETE_PIZZA,
  INCREASE_PIZZA_QUANTITY,
} from './actions/cartActions'
import {
  FETCH_PIZZA_FAILURE,
  FETCH_PIZZA_STARTED,
  FETCH_PIZZA_SUCCESS,
} from './actions/pizzaActions'
import {
  FETCH_PIZZA_LIST_FAILURE,
  FETCH_PIZZA_LIST_STARTED,
  FETCH_PIZZA_LIST_SUCCESS,
  SET_PAGES,
} from './actions/pizzaListActions'

// --- Твои существующие типы ---

export interface InitialStatePizzaList {
  pizzaList: Pizza[]
  isLoading: boolean
  errorMessage: string
  nextPage: number
  prevPage: number
}

export interface StartFetchingPizzaList {
  type: typeof FETCH_PIZZA_LIST_STARTED
}

export interface SetPizzaList {
  type: typeof FETCH_PIZZA_LIST_SUCCESS
  payload: Pizza[]
}

export interface SetErrMsgPizzaList {
  type: typeof FETCH_PIZZA_LIST_FAILURE
  payload: string
}

export type ActionPizzaList =
  | SetPizzaList
  | StartFetchingPizzaList
  | SetErrMsgPizzaList
  | SetPages

export interface InitialStatePizza {
  pizza: Pizza
  isLoading: boolean
  errorMessage: string
}

export interface StartFetchingPizza {
  type: typeof FETCH_PIZZA_STARTED
}

export interface SetPizza {
  type: typeof FETCH_PIZZA_SUCCESS
  payload: Pizza
}

export interface SetErrMsgPizza {
  type: typeof FETCH_PIZZA_FAILURE
  payload: string
}

export type ActionPizza = SetPizza | StartFetchingPizza | SetErrMsgPizza

export interface PizzaCart {
  pizza: Pizza
  quantity: number
}

export type InitialStateCart = {
  cart: PizzaCart[]
}

export interface AddPizza {
  type: typeof ADD_PIZZA
  payload: PizzaCart
}

export interface DeletePizza {
  type: typeof DELETE_PIZZA
  payload: string
}

export interface IncreasePizzaQuantity {
  type: typeof INCREASE_PIZZA_QUANTITY
  payload: string
}

export interface DecreasePizzaQuantity {
  type: typeof DECREASE_PIZZA_QUANTITY
  payload: string
}

export interface ClearCart {
  type: typeof CLEAR_CART
}

export type ActionCart =
  | AddPizza
  | DeletePizza
  | IncreasePizzaQuantity
  | DecreasePizzaQuantity
  | ClearCart

export interface SetPagesPayload {
  nextPage: number
  prevPage: number
}

export interface SetPages {
  type: typeof SET_PAGES
  payload: SetPagesPayload
}

// ===== Новые типы для пользователя (авторизация и регистрация) =====

// Тип пользователя в приложении
export interface User {
  id?: number
  username: string
  password: string
}

// Начальное состояние редьюсера user
export interface InitialStateUser {
  user: User | null
  isLoading: boolean
  errorMessage: string
}

// Действия для регистрации
export interface UserRegisterStarted {
  type: 'user/registerStarted'
}

export interface UserRegisterSuccess {
  type: 'user/registerSuccess'
  payload: User
}

export interface UserRegisterFailure {
  type: 'user/registerFailure'
  payload: string
}

// Действия для входа
export interface UserLoginStarted {
  type: 'user/loginStarted'
}

export interface UserLoginSuccess {
  type: 'user/loginSuccess'
  payload: User
}

export interface UserLoginFailure {
  type: 'user/loginFailure'
  payload: string
}

// Действие выхода
export interface UserLogout {
  type: 'user/logout'
}

// Общий тип действий для user
export type ActionUser =
  | UserRegisterStarted
  | UserRegisterSuccess
  | UserRegisterFailure
  | UserLoginStarted
  | UserLoginSuccess
  | UserLoginFailure
  | UserLogout
