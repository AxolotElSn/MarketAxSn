import styled from 'styled-components'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '15px',
  boxShadow: '3px 3px 10px var(--c-gray-200)',
  padding: '25px',
  height: 'max-content',
  borderRadius: '9px',
})

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '10px',
  alignItems: 'center',
})

export const ImgWrapper = styled.div({
  height: '140px',
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
  width: '220px',
  height: '140px',
  objectFit: 'cover',
  borderRadius: '9px',
})
