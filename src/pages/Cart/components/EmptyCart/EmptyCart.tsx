import { StyledLink } from '@/components/ui/StyledLink/StyledLink'
import { Text } from '@/components/ui/Text/Text'
import { routesPaths } from '@/consts/routesPaths'

import * as S from './style'

export const EmptyCart = () => {
  const { pathPizzaList } = routesPaths

  return (
    <S.Container>
      <StyledLink to={pathPizzaList}>&larr; Вернуться к ассотрименту</StyledLink>
      <Text $fontSize="14px">Заказ пуст...</Text>
    </S.Container>
  )
}
