import styled, { css } from 'styled-components'

import { fontWeights } from './consts/fontWeights'
import { HeadingProps } from './type'

export const Heading = styled.h1<HeadingProps>`
  ${({ as }) =>
    as === 'h1' &&
    css`
      font-size: 32px;
    `}

  ${({ as }) =>
    as === 'h2' &&
    css`
      font-size: 29px;
    `}

    ${({ as }) =>
    as === 'h3' &&
    css`
      font-size: 25px;
    `}

    ${({ as }) =>
    as === 'h4' &&
    css`
      font-size: 22px;
    `}

    ${({ as }) =>
    as === 'h5' &&
    css`
      font-size: 19px;
    `}

    ${({ as }) =>
    as === 'h5' &&
    css`
      font-size: 15px;
    `}

    ${({ as }) =>
    as === 'h6' &&
    css`
      font-size: 12px;
    `};

  color: var(--c-gray-900);

  font-weight: ${({ $fontWeight }) => fontWeights[$fontWeight]};
`

Heading.defaultProps = {
  as: 'h3',
  $fontWeight: 'medium',
}
