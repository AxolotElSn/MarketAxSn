import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, register, logout } from '@/store/actionCreators/userActionCreators'
import { RootState } from '@/types/types'

export const AuthForm = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.user)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginMode, setIsLoginMode] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoginMode) {
      dispatch(login(username, password))
    } else {
      dispatch(register({ username, password }))
    }
  }

  return (
    <div>
      {user ? (
        <>
          <p>Привет, {user.username}!</p>
          <button onClick={() => dispatch(logout())}>Выйти</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Имя пользователя"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            type="password"
            required
          />
          <button type="submit">{isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>
          <button type="button" onClick={() => setIsLoginMode(!isLoginMode)}>
            {isLoginMode ? 'Перейти к регистрации' : 'Перейти к входу'}
          </button>
        </form>
      )}
    </div>
  )
}
