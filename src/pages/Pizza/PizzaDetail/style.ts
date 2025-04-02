import styled from 'styled-components'

export const Container = styled.div({
  boxShadow: '3px 3px 10px var(--c-gray-200)',
  padding: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1.75fr',
  gap: '15px',
  borderRadius: '9px',
})

export const ImgWrapper = styled.div({
  height: '450px',
  position: 'relative',
  transformOrigin: 'top',

  '&::before': {
    content: "''",
    display: 'block',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: 'var(--c-yellow-300)',
    opacity: '0.25',
    borderRadius: '9px',
  },
})

export const Img = styled.img({
  width: '100%',
  height: '450px',
  objectFit: 'cover',
  borderRadius: '9px',
})

export const Content = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(9, auto) 1fr',
  rowGap: '5px',
})

export const TextWrapper = styled.div({
  fontSize: '16px',

  'span:first-child': {
    color: 'var(--c-yellow-700)',
  },

  'span:last-child': {
    color: 'var(--c-gray-900)',
  },
})

export const ButtonWrapper = styled.div({
  justifySelf: 'end',
  alignSelf: 'end',
  display: 'flex',
  columnGap: '12px',
})

export const Header = styled.h2({
  fontSize: '29px',
  fontWeight: '600',
  marginBottom: '10px',
})
