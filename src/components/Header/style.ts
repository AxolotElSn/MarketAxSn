import styled from 'styled-components'

import { MOBILE } from '@/consts/mediaQueries'

export const Header = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6px 42px',
  position: 'fixed',
  maxWidth: ' 1440px',
  width: '100%',
  backgroundColor: 'var(--c-white)',
  zIndex: '100',
  top: '16px',
  left: '50%',
  transform: 'translateX(-50%)',

  [`@media ${MOBILE}`]: {
    padding: '6px 20px',
    flexDirection: 'column',
    border: '1px solid var(--c-gray-100)',
  },
})
