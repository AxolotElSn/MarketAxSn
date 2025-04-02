export interface RowProps {
  type?: 'horizontal' | 'vertical'
  $gap?: string
  $alignItems?: 'start' | 'center' | 'end' | 'stretch'
  $justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}
