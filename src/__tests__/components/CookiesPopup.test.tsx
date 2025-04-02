import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'

import { CookiesPopup } from '@/components/CookiesPopup/CookiesPopup'

describe('CookiesPopup', () => {
  test('Проверка отрисовки элементов', () => {
    render(<CookiesPopup />)
    const spanElement = screen.getByText(/мы используем cookies/i)
    expect(spanElement).toBeInTheDocument()
    const buttonElement = screen.getByRole('button', { name: /ок/i })
    expect(buttonElement).toBeInTheDocument()
  })

  test('Проверка закрытия модального окна после клика на кнопку', () => {
    render(<CookiesPopup />)
    const buttonElement = screen.getByRole('button', { name: /ок/i })
    fireEvent.click(buttonElement)
    expect(screen.queryByText(/мы используем cookies/i)).not.toBeInTheDocument()
  })
})
