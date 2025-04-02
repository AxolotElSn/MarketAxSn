import styled, { css } from 'styled-components'

import { colors } from './consts/colors'
import { TextProps } from './type'

export const Text = styled.span<TextProps>`
  ${({ $fontSize, $letterSpacing, $color, $textAlign, $lineHeight }) => css`
    font-size: ${$fontSize};
    letter-spacing: ${$letterSpacing};
    color: ${colors[$color]};
    text-align: ${$textAlign};
    line-height: ${$lineHeight};
  `}
`

Text.defaultProps = {
  $fontSize: '14px',
  $letterSpacing: '0px',
  $color: 'gray900',
  $textAlign: 'left',
  $lineHeight: '1.5',
}
