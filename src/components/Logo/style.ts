import styled from 'styled-components'

export const Container = styled.div({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '7px',

  svg: {
    width: '32px',
    height: '32px',
    color: 'var(--c-yellow-700)',
  },
})
