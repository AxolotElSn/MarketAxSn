import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './AppRouter/appRouter' // этот файл должен быть создан и корректен

export const App = () => {
  const router = appRouter()
  return <RouterProvider router={router} />
}

