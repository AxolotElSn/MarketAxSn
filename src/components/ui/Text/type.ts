import { colors } from './consts/colors'

export interface TextProps {
  $fontSize: string
  $letterSpacing?: string
  $color?: keyof typeof colors
  $textAlign?: 'left' | 'right' | 'center'
  $lineHeight?: string
}
