import { v4 as uuidv4 } from 'uuid'

export interface checkboxField {
  label: '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45'
  id: string
}

export const checkboxFields: checkboxField[] = [
  { label: '36', id: uuidv4() },
  { label: '37', id: uuidv4() },
  { label: '38', id: uuidv4() },
  { label: '39', id: uuidv4() },
  { label: '40', id: uuidv4() },
  { label: '41', id: uuidv4() },
  { label: '42', id: uuidv4() },
  { label: '43', id: uuidv4() },
  { label: '44', id: uuidv4() },
  { label: '45', id: uuidv4() },
]
