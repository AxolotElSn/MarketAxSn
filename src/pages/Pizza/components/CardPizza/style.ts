import styled from 'styled-components'

import { MOBILE } from '@/consts/mediaQueries'

import { ImgProps } from './type'

export const Container = styled.div({
  cursor: 'default',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto auto auto 1fr',
  rowGap: '4px',
  padding: '8px',
  maxWidth: '325px',
  minWidth: '325px',
  height: '420px',
  boxShadow: '2px 2px 10px var(--c-gray-300)',
  borderRadius: '9px',

  [`@media ${MOBILE}`]: {
    maxWidth: '100%',
    minWidth: '100%',
  },
})

export const ImgWrapper = styled.div({
  height: '180px',
  position: 'relative',
  transformOrigin: 'top',
  cursor: 'pointer',

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

export const Img = styled.img<ImgProps>(({ $isSoldOut }) => ({
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '9px',
  filter: $isSoldOut ? 'grayscale(100%)' : undefined,
}))

export const Description = styled.span({
  fontSize: '14px',
  color: 'var(--c-gray-600)',
  overflow: 'hidden',
  lineHeight: '1.4',
})

export const WrapperBottom = styled.div({
  alignSelf: 'end',
  display: 'flex',
  flexDirection: 'column',
})

export const ButtonWrapper = styled.div({
  marginTop: '8px',

  button: {
    width: '100%',
  },
})
