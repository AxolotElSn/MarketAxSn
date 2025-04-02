import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'

import IconPizza from '@/assets/images/icons/pizza.svg'
import { Text } from '@/components/ui/Text/Text'
import { MOBILE } from '@/consts/mediaQueries'
import { routesPaths } from '@/consts/routesPaths'

import * as S from './style'

export const Logo = () => {
  const navigate = useNavigate()

  const { pathPizzaList } = routesPaths

  const handleClick = () => navigate(pathPizzaList)

  const isMobile = useMediaQuery({
    query: MOBILE,
  })

  return (
    <S.Container onClick={handleClick}>
      <IconPizza />
      <Text
        $fontSize="32px"
        $letterSpacing="-1px"
        $lineHeight={isMobile ? '1.25' : '1.5'}
      >
        Milan Pizza
      </Text>
    </S.Container>
  )
}
