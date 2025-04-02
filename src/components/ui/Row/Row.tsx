import styled, { css } from 'styled-components'

import { RowProps } from './type'

export const Row = styled.div<RowProps>`
  display: flex;

  ${({ type, $alignItems, $justifyContent }) =>
    type === 'horizontal' &&
    css`
      justify-content: ${$justifyContent};
      align-items: ${$alignItems};
    `}

  ${({ type, $gap, $alignItems }) =>
    type === 'vertical' &&
    css`
      flex-direction: column;
      gap: ${$gap};
      align-items: ${$alignItems};
    `}
`

Row.defaultProps = {
  type: 'vertical',
  $gap: '0px',
  $alignItems: 'start',
  $justifyContent: 'space-between',
}
