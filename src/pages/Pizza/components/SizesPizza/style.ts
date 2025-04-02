import styled from 'styled-components'

import { SizeProps } from './type'

export const Container = styled.div({
  display: 'flex',
  gap: '8px',
})

export const Size = styled.span<SizeProps>(({ $item, $sizes }) => {
  const isInclude = $sizes.includes($item)

  return {
    fontSize: '18px',
    color: isInclude ? 'var(--c-gray-900)' : 'var(--c-gray-300)',
  }
})
