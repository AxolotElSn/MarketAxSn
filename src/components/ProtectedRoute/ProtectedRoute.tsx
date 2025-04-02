import Cookies from 'js-cookie'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { routesPaths } from '@/consts/routesPaths'

import { ProtectedRouteProps } from './type'

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const userId = Cookies.get('userId')

  const { pathLogin } = routesPaths

  if (!userId) return children
  return <Navigate to={pathLogin} />
}
