import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './AppRouter/appRouter'

export const App = () => {
  const router = appRouter()
  return <RouterProvider router={router} />
}
