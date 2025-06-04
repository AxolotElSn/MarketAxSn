import { createBrowserRouter } from 'react-router-dom'

import { Main } from '@/components/Main/Main'
import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute'
import { routesPaths } from '@/consts/routesPaths'
import { AppLayout } from '@/layout/AppLayout'
import { Cart } from '@/pages/Cart'
import { Contacts } from '@/pages/Contacts'
import { LoginPage } from '@/pages/Login'
import { PizzaDetail, PizzaEditorWrapper, PizzaListPage } from '@/pages/Pizza'
import { SalesStatsAdmin } from '@/components/SalesStatsAdmin/SalesStatsAdmin'
import { CsvImport } from '@/components/CsvImport/CsvImport' // <-- импортируем

const {
  pathCreatePizza,
  pathPizzaDetail,
  pathEditPizza,
  pathCart,
  pathContacts,
  pathPizzaList,
  pathLogin,
} = routesPaths

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AppLayout>
            <Main />
          </AppLayout>
        </ProtectedRoute>
      ),
      children: [
        {
          path: pathPizzaList,
          element: <PizzaListPage />,
        },
        {
          path: pathCreatePizza,
          element: <PizzaEditorWrapper />,
        },
        {
          path: `${pathPizzaDetail}/:pizzaId`,
          element: <PizzaDetail />,
        },
        {
          path: `${pathEditPizza}/:pizzaId`,
          element: <PizzaEditorWrapper />,
        },
        {
          path: pathCart,
          element: <Cart />,
        },
        {
          path: pathContacts,
          element: <Contacts />,
        },
        {
          path: '/stats',
          element: <SalesStatsAdmin />,
        },
        {
          path: '/import',           // <-- новый маршрут для импорта CSV
          element: <CsvImport />,    // <-- отображаем компонент импорта
        },
      ],
    },
    {
      path: pathLogin,
      element: <LoginPage />,
    },
  ])
