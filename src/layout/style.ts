import styled from 'styled-components'

import { MOBILE } from '@/consts/mediaQueries'

export const AppLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxWidth: '1440px',
  width: '100%',
  margin: '0 auto',
  padding: '16px 32px 0 32px',

  [`@media ${MOBILE}`]: {
    padding: '10px 10px 0 10px',
  },
})
