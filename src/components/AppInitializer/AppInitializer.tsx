import { fetchUserById } from '@/api/user'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLoginStarted, userLoginSuccess, userLoginFailure, logout, loadUserFromCookie } from '@/store/actionCreators/userActionCreators'
import Cookies from 'js-cookie'

export const AppInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const init = async () => {
      const userId = Cookies.get('userId')
      if (!userId) {
        dispatch(logout())
        setInitialized(true)
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
      } catch {
        dispatch(logout())
      } finally {
        setInitialized(true)
      }
    }

    init()
  }, [dispatch])

  if (!initialized) {
    // Можно поставить лоадер, пока не инициализирован
    return <div>Загрузка...</div>
  }

  return <>{children}</>
}
