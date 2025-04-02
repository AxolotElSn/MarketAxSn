import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
  test('Преобразует первую букву в заглавную', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
  })

  test("Преобразует первую букву в заглавную, все остальные буквы оставляет 'как есть'", () => {
    expect(capitalizeFirstLetter('hello World')).toBe('Hello World')
  })

  test('Возвращает пустую строку, если была передана пустая строка', () => {
    expect(capitalizeFirstLetter('')).toBe('')
  })
})
