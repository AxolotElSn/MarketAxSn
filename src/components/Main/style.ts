import styled from 'styled-components'

import { MOBILE } from '@/consts/mediaQueries'

export const Main = styled.main({
  padding: '16px 10px',
  marginTop: '76px',
  flexBasis: '0',
  flexGrow: '1',

  [`@media ${MOBILE}`]: {
    marginTop: '82px',
  },
})
