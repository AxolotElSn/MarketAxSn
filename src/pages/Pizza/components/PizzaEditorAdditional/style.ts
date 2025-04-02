import styled from 'styled-components'

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto auto auto 1fr',
  rowGap: '14px',
  boxShadow: '3px 3px 10px var(--c-gray-200)',
  padding: '25px',
  borderRadius: '9px',
})

export const InputTextWrapper = styled.div({
  display: 'flex',
  gap: '15px',
  flexWrap: 'wrap',
})

export const Wrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '250px 250px',
  columnGap: '15px',
})

export const ButtonWrapper = styled.div({
  alignSelf: 'end',
  justifySelf: 'end',
})
