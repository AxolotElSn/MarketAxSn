import styled from 'styled-components'

export const Container = styled.div({
  display: 'flex',
  gap: '5px',

  'input:disabled': {
    cursor: 'not-allowed',
  },

  'input:disabled + label': {
    fontStyle: 'italic',
    color: 'var(--c-gray-500)',
  },
})

export const Input = styled.input({
  height: '15px',
  width: '15px',
  accentColor: 'var(--c-yellow-300)',
})

export const Label = styled.label({
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
})
