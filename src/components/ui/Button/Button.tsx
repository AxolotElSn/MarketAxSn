import styled from 'styled-components'

import { sizes } from './consts/sizes'
import { variants } from './consts/variants'
import { ButtonProps } from './type'

export const Button = styled.button<ButtonProps>(({ $size, $variation }) => {
  return {
    cursor: 'pointer',
    transition: 'all 0.1s linear',
    border: 'none',
    borderRadius: '6px',
    color: 'var(--c-gray-600)',

    ...sizes[$size],
    ...variants[$variation],

    '&:hover, &:focus': {
      filter: 'brightness(90%)',
    },

    '&:active': {
      filter: 'brightness(80%)',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      filter: 'brightness(80%)',
    },
  }
})

Button.defaultProps = {
  $size: 'medium',
  $variation: 'primary',
}
