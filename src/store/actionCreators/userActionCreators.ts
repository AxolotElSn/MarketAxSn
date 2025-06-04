import Cookies from 'js-cookie'
import {
  USER_REGISTER_STARTED,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_STARTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from '../actions/userActions'
import { User, registerUser, loginUser, fetchUserById } from '@/api/user'
import { AppDispatch } from '@/types/types'

// Существующие action creators и thunk'и...

export const userRegisterStarted = () => ({ type: USER_REGISTER_STARTED })
export const userRegisterSuccess = (user: User) => ({ type: USER_REGISTER_SUCCESS, payload: user })
export const userRegisterFailure = (error: string) => ({ type: USER_REGISTER_FAILURE, payload: error })

export const userLoginStarted = () => ({ type: USER_LOGIN_STARTED })
export const userLoginSuccess = (user: User) => ({ type: USER_LOGIN_SUCCESS, payload: user })
export const userLoginFailure = (error: string) => ({ type: USER_LOGIN_FAILURE, payload: error })

export const logout = () => {
  Cookies.remove('userId')
  return { type: USER_LOGOUT }
}

export const register = (user: User) => async (dispatch: AppDispatch) => {
  dispatch(userRegisterStarted())
  try {
    const registeredUser = await registerUser(user)
    dispatch(userRegisterSuccess(registeredUser))
    Cookies.set('userId', registeredUser.id.toString(), { expires: 7 })
  } catch (error: any) {
    dispatch(userRegisterFailure(error.message || 'Ошибка регистрации'))
  }
}

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(userLoginStarted())
  try {
    const user = await loginUser(username, password)
    if (user) {
      dispatch(userLoginSuccess(user))
      Cookies.set('userId', user.id.toString(), { expires: 7 })
    } else {
      dispatch(userLoginFailure('Неверное имя пользователя или пароль'))
    }
  } catch (error: any) {
    dispatch(userLoginFailure(error.message || 'Ошибка входа'))
  }
}

// Новый thunk для восстановления пользователя из cookie
export const loadUserFromCookie = () => async (dispatch: AppDispatch) => {
  const userId = Cookies.get('userId')
  if (!userId) {
    dispatch(logout())
    return
  }

  dispatch(userLoginStarted())
  try {
    const user = await fetchUserById(userId)
    if (user) {
      dispatch(userLoginSuccess(user))
    } else {
      dispatch(logout())
    }
  } catch (error: any) {
    dispatch(userLoginFailure(error.message || 'Ошибка загрузки пользователя'))
    dispatch(logout())
  }
}
