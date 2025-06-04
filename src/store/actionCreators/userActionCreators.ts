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
import { User, registerUser, loginUser } from '@/api/user'
import { AppDispatch } from '@/types/types'

// Action creators
export const userRegisterStarted = () => ({ type: USER_REGISTER_STARTED })
export const userRegisterSuccess = (user: User) => ({ type: USER_REGISTER_SUCCESS, payload: user })
export const userRegisterFailure = (error: string) => ({ type: USER_REGISTER_FAILURE, payload: error })

export const userLoginStarted = () => ({ type: USER_LOGIN_STARTED })
export const userLoginSuccess = (user: User) => ({ type: USER_LOGIN_SUCCESS, payload: user })
export const userLoginFailure = (error: string) => ({ type: USER_LOGIN_FAILURE, payload: error })

export const logout = () => {
  Cookies.remove('userId') // Удаляем куку при выходе
  return { type: USER_LOGOUT }
}

// Thunk для регистрации
export const register = (user: User) => async (dispatch: AppDispatch) => {
  dispatch(userRegisterStarted())
  try {
    const registeredUser = await registerUser(user)
    dispatch(userRegisterSuccess(registeredUser))

    // ✅ Установка cookie после успешной регистрации
    Cookies.set('userId', registeredUser.id.toString(), { expires: 7 })
  } catch (error: any) {
    dispatch(userRegisterFailure(error.message || 'Ошибка регистрации'))
  }
}

// Thunk для логина
export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(userLoginStarted())
  try {
    const user = await loginUser(username, password)
    if (user) {
      dispatch(userLoginSuccess(user))

      // ✅ Установка cookie после успешного входа
      Cookies.set('userId', user.id.toString(), { expires: 7 })
    } else {
      dispatch(userLoginFailure('Неверное имя пользователя или пароль'))
    }
  } catch (error: any) {
    dispatch(userLoginFailure(error.message || 'Ошибка входа'))
  }
}
