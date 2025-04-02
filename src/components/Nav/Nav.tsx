import { routesPaths } from '@/consts/routesPaths'
import { useAppSelector } from '@/hooks/useAppSelector'
import { selectTotalCartQuantity } from '@/store/selectors/cartSelectors'

import * as S from './style'

export const Nav = () => {
  const totalCartQuantity = useAppSelector(selectTotalCartQuantity)

  const { pathPizzaList, pathCart, pathContacts } = routesPaths

  return (
    <S.Nav>
      <S.StyledNavLink to={pathPizzaList}>Ассортимент</S.StyledNavLink>

      <S.LinkWrapper>
        <S.StyledNavLink to={pathCart}>Заказ</S.StyledNavLink>
        {totalCartQuantity ? (
          <S.Circle>
            <S.Amount>{totalCartQuantity}</S.Amount>
          </S.Circle>
        ) : null}
      </S.LinkWrapper>

      <S.StyledNavLink to={pathContacts}>Контакты</S.StyledNavLink>
    </S.Nav>
  )
}
