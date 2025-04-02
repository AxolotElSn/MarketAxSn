import styled from 'styled-components'

import { MOBILE } from '@/consts/mediaQueries'

export const Container = styled.div({
  cursor: 'default',
  position: 'fixed',
  bottom: '1%',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '10px 20px',
  backgroundColor: 'var(--c-gray-50)',
  borderRadius: '9px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  boxShadow: '2px 2px 10px var(--c-gray-300)',
  zIndex: '500',

  [`@media ${MOBILE}`]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '8px',
  },
})

export const IconWrapper = styled.div({
  svg: {
    width: '32px',
    height: '32px',
    color: 'var(--c-yellow-700)',
  },

  [`@media ${MOBILE}`]: {
    display: 'none',
  },
})

export const Text = styled.span({
  fontSize: '15px',
  lineHeight: '1.15',

  [`@media ${MOBILE}`]: {
    fontSize: '12px',
    textAlign: 'center',
  },
})

export const ButtonWrapper = styled.div({
  display: 'flex',
  gap: '8px',
})
