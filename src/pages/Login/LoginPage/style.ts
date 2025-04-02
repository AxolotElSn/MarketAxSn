import styled from 'styled-components'

export const Container = styled.div({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: 'var(--c-gray-50)',
})

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '375px',
  padding: '20px 17px',
  borderRadius: '15px',
  boxShadow: '-2px 2px 15px var(--c-gray-200)',
})

export const Img = styled.img({
  width: '100%',
  height: '320px',
  objectFit: 'cover',
  borderRadius: '9px',
})
