import styled from 'styled-components'

export const Container = styled.div({
  flexBasis: '0',
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
})

export const Row = styled.div({
  display: 'flex',
  columnGap: '8px',
  alignItems: 'center',

  svg: {
    width: '18px',
    height: '18px',
    color: 'var(--c-gray-400)',
  },
})

export const LinkWrapper = styled.div({
  alignSelf: 'flex-start',
})

export const Link = styled.a({
  fontSize: '14px',
  textDecoration: 'none',
  color: 'var(--c-gray-900)',
})
