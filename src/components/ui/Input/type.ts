export interface InputProps {
  id?: string
  label?: string
  width?: string
  $isError?: boolean
  errorMessage?: string

  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  defaultValue?: string | number
  maxLength?: number
  type?: 'text' | 'number' | 'email' | 'password' | 'file'
  min?: number
  max?: number
  step?: number
}

export interface StyledInputProps {
  $isError?: InputProps['$isError']
  width?: InputProps['width']
}
