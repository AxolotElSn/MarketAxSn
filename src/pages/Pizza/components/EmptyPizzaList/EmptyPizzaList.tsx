import { useMediaQuery } from 'react-responsive'

import { Text } from '@/components/ui/Text/Text'
import { MOBILE } from '@/consts/mediaQueries'

import * as S from './style'

export const EmptyPizzaList = () => {
  const isMobile = useMediaQuery({
    query: MOBILE,
  })

  return (
    <S.Container>
      <S.Wrapper>
        <Text $fontSize={isMobile ? '14px' : '18px'} $color="gray600">
          Упс! Такой пиццы у нас нет...
        </Text>
      </S.Wrapper>
    </S.Container>
  )
}
