// ProtectedRoute.tsx
import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routesPaths } from '@/consts/routesPaths'
import { selectUser, selectUserLoading } from '@/store/selectors/userSelectors'

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectUserLoading)
  const { pathLogin } = routesPaths

  if (isLoading) return <div>Загрузка...</div>

  if (!user) return <Navigate to={pathLogin} replace />

  return <>{children}</>
}
