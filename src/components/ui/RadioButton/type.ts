import { ChangeEvent } from 'react'

export interface RadioButtonProps {
  label: string
  name?: string
  id: string
  checked: boolean
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
  disabled?: boolean
}
