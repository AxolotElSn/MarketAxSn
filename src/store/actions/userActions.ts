// src/store/actions/userActions.ts

export const USER_REGISTER_STARTED = 'user/registerStarted'
export const USER_REGISTER_SUCCESS = 'user/registerSuccess'
export const USER_REGISTER_FAILURE = 'user/registerFailure'

export const USER_LOGIN_STARTED = 'user/loginStarted'
export const USER_LOGIN_SUCCESS = 'user/loginSuccess'
export const USER_LOGIN_FAILURE = 'user/loginFailure'

export const USER_LOGOUT = 'user/logout'

// Action creators
export const userRegisterStarted = () => ({ type: USER_REGISTER_STARTED })
export const userRegisterSuccess = (user: any) => ({ type: USER_REGISTER_SUCCESS, payload: user })
export const userRegisterFailure = (error: string) => ({ type: USER_REGISTER_FAILURE, payload: error })

export const userLoginStarted = () => ({ type: USER_LOGIN_STARTED })
export const userLoginSuccess = (user: any) => ({ type: USER_LOGIN_SUCCESS, payload: user })
export const userLoginFailure = (error: string) => ({ type: USER_LOGIN_FAILURE, payload: error })

export const logout = () => ({ type: USER_LOGOUT })

// Примеры thunk-ов (если нужны):
// import { AppDispatch } from '@/types/types'
// import { registerUser, loginUser } from '@/api/user'

// export const register = (user: any) => async (dispatch: AppDispatch) => {
//   dispatch(userRegisterStarted())
//   try {
//     const registeredUser = await registerUser(user)
//     dispatch(userRegisterSuccess(registeredUser))
//   } catch (error: any) {
//     dispatch(userRegisterFailure(error.message || 'Ошибка регистрации'))
//   }
// }

// export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
//   dispatch(userLoginStarted())
//   try {
//     const user = await loginUser(username, password)
//     if (user) {
//       dispatch(userLoginSuccess(user))
//     } else {
//       dispatch(userLoginFailure('Неверное имя пользователя или пароль'))
//     }
//   } catch (error: any) {
//     dispatch(userLoginFailure(error.message || 'Ошибка входа'))
//   }
// }
