import styled from 'styled-components'

export const Container = styled.div({
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(4px)',
  zIndex: '1000',
})
