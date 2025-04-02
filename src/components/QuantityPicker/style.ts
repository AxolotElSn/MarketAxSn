import styled from 'styled-components'

export const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 500,
})

export const Button = styled.button({
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'var(--c-yellow-300)',
  color: 'var(--c-gray-900)',
  borderRadius: '9999px',
  transition: 'all 0.1s linear',
  fontSize: '16px',
  padding: '4px 11px',
  marginTop: '0px',

  '&:hover, &:focus': {
    filter: 'brightness(90%)',
  },

  '&:active': {
    filter: 'brightness(80%)',
  },
})
