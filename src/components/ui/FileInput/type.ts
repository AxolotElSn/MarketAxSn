export interface FileInputProps {
  label: string
  isError?: boolean

  onChange?: React.ChangeEventHandler<HTMLInputElement>
  accept?: string
}

export interface LabelProps {
  $isError?: boolean
}
