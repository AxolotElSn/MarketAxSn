import styled from 'styled-components'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '20px',
  boxShadow: '3px 3px 10px var(--c-gray-200)',
  overflow: 'auto',
  borderRadius: '9px',
})

export const ButtonWrapper = styled.div({
  alignSelf: 'end',
  display: 'flex',
  gap: '10px',
})

export const List = styled.ul({
  maxWidth: '600px',
  margin: '0',
  padding: '0',
  listStyle: 'none',
  flexBasis: '0',
  flexGrow: '1',
})
