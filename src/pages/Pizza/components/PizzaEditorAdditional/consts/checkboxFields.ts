import { v4 as uuidv4 } from 'uuid'

export interface checkboxField {
  label: 'S' | 'M' | 'L' | 'XL'
  id: string
}

export const checkboxFields: checkboxField[] = [
  { label: 'S', id: uuidv4() },
  { label: 'M', id: uuidv4() },
  { label: 'L', id: uuidv4() },
  { label: 'XL', id: uuidv4() },
]
