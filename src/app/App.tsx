import { RouterProvider } from 'react-router-dom'

import { appRouter } from './AppRouter/appRouter'

export const App = () => {
  return <RouterProvider router={appRouter()} />
}
