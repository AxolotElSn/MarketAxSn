export interface CheckboxProps {
  label: string
  id: string
  checked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}
