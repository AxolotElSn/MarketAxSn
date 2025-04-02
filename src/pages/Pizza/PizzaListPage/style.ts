import styled from 'styled-components'

import { MOBILE } from '@/consts/mediaQueries'

export const Conatiner = styled.div({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '16px',
  minHeight: '100%',
})

export const InputWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [`@media ${MOBILE}`]: {
    flexDirection: 'column',
    rowGap: '16px',
  },
})

export const List = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '18px',
})

export const PaginationWrapper = styled.div({
  alignSelf: 'center',
})
