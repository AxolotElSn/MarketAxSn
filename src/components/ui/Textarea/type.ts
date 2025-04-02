export interface TextareaProps {
  label: string
  id: string
  height: string
  $isError?: boolean
  width?: string
  errorMessage?: string

  value?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  defaultValue?: string
  maxLength?: number
}

export interface StyledTextareaProps {
  width?: TextareaProps['width']
  height?: TextareaProps['height']
  $isError?: TextareaProps['$isError']
}
