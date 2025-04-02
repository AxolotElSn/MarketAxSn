import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { routesPaths } from '@/consts/routesPaths'
import { EmptyCart } from '@/pages/Cart/components/EmptyCart/EmptyCart'

describe('EmptyCart', () => {
  test('Проверка отрисовки элементов', () => {
    render(
      <MemoryRouter>
        <EmptyCart />
      </MemoryRouter>,
    )
    const anchorElement = screen.getByText(/вернуться к меню/i)
    expect(anchorElement).toBeInTheDocument()
    const spanElement = screen.getByText(/корзина/i)
    expect(spanElement).toBeInTheDocument()
  })

  test('Проверка наличия корректного пути у ссылки', () => {
    const { pathPizzaList } = routesPaths
    render(
      <MemoryRouter>
        <EmptyCart />
      </MemoryRouter>,
    )
    const anchorElement = screen.getByText(/вернуться к меню/i)
    expect(anchorElement.closest('a')).toHaveAttribute('href', pathPizzaList)
  })
})
