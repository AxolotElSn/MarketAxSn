import styled from 'styled-components'

import { errorStyles } from './consts/errorStyles'
import { StyledTextareaProps } from './type'

export const Label = styled.label({
  fontSize: '12px',
  color: 'var(--c-gray-900)',
})

export const Textarea = styled.textarea<StyledTextareaProps>(
  ({ height, width, $isError }) => {
    return {
      resize: 'none',
      width: width,
      padding: '8px 12px',
      fontSize: '12px',
      color: 'var(--c-gray-900)',
      borderRadius: '4px',

      ...errorStyles[String($isError) as keyof typeof errorStyles],

      '&::placeholder': {
        color: 'var(--c-gray-500)',
      },

      '&:focus': {
        outline: 'none',
      },

      '&:not([rows])': {
        minHeight: height,
      },
    }
  },
)

Textarea.defaultProps = {
  width: '100%',
  $isError: false,
}
