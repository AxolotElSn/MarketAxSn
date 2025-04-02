import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { MOBILE } from '@/consts/mediaQueries'

export const Nav = styled.nav({
  display: 'flex',
  columnGap: '40px',

  [`@media ${MOBILE}`]: {
    columnGap: '15px',
  },
})

export const StyledNavLink = styled(NavLink)({
  color: 'var(--c-gray-600)',
  transition: 'all 0.1s linear',
  textDecoration: 'none',
  fontSize: '17px',

  '&:hover, &.active': {
    color: 'var(--c-yellow-700)',
  },

  [`@media ${MOBILE}`]: {
    fontSize: '16px',
  },
})

export const LinkWrapper = styled.div({
  position: 'relative',
})

export const Circle = styled.div({
  position: 'absolute',
  right: '-18px',
  bottom: '-9px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '23px',
  height: '23px',
  backgroundColor: 'var(--c-yellow-300)',
  borderRadius: '100%',

  [`@media ${MOBILE}`]: {
    right: '-16px',
    bottom: '-10px',
    width: '21px',
    height: '21px',
  },
})

export const Amount = styled.span({
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '13.5px',
  color: 'var(--c-gray-900)',
})
