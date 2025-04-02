import styled from 'styled-components'

import { errorStyles } from './consts/errorStyles'
import { StyledInputProps } from './type'

export const Label = styled.label({
  fontSize: '12px',
  color: 'var(--c-gray-900)',
})

export const Input = styled.input<StyledInputProps>(({ $isError, width }) => {
  return {
    padding: '8px 12px',
    fontSize: '12px',
    color: 'var(--c-gray-900)',
    borderRadius: '4px',
    width: width,

    ...errorStyles[String($isError) as keyof typeof errorStyles],

    '&::placeholder': {
      color: 'var(--c-gray-500)',
    },

    '&:focus': {
      outline: 'none',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#fff',
    },

    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },

    '&:nth-of-type(1)': {
      MozAppearance: 'textfield',
    },
  }
})

Input.defaultProps = {
  $isError: false,
  width: '100%',
}
