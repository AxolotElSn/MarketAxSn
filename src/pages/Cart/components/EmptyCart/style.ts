import styled from 'styled-components'

export const Container = styled.div({
  height: '100%',
  padding: '20px',
  boxShadow: '3px 3px 10px var(--c-gray-200)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  borderRadius: '9px',

  a: {
    alignSelf: 'flex-start',
  },
})
