import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, login, logout } from '@/store/actionCreators/userActionCreators'
import { selectUser, selectUserLoading, selectUserError } from '@/store/selectors/userSelectors'

export const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const loading = useSelector(selectUserLoading)
  const error = useSelector(selectUserError)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isRegister) {
      dispatch(register({ username, password }))
    } else {
      dispatch(login(username, password))
    }
  }

  const onLogout = () => {
    dispatch(logout())
  }

  if (loading) return <p>Загрузка...</p>

  return (
    <div style={{ maxWidth: 320, margin: 'auto', padding: 16 }}>
      {user ? (
        <div>
          <p>Добро пожаловать, <b>{user.username}</b>!</p>
          <button onClick={onLogout}>Выйти</button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <h2>{isRegister ? 'Регистрация' : 'Вход'}</h2>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Имя пользователя"
            required
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Пароль"
            required
            style={{ width: '100%', marginBottom: 8, padding: 8 }}
          />
          <button type="submit" style={{ width: '100%', padding: 8 }}>
            {isRegister ? 'Зарегистрироваться' : 'Войти'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p style={{ marginTop: 12, fontSize: 14 }}>
            {isRegister ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}{' '}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {isRegister ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </p>
        </form>
      )}
    </div>
  )
}
