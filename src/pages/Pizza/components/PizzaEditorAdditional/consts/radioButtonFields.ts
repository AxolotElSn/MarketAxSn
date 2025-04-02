import { v4 as uuidv4 } from 'uuid'

export interface radioButtonField {
  value: boolean
  label: 'Да' | 'Нет'
  id: string
}

export const radioButtonFields: radioButtonField[] = [
  { value: true, label: 'Да', id: uuidv4() },
  { value: false, label: 'Нет', id: uuidv4() },
]
