import { FC } from 'react'

import * as S from './style'
import { StyledLinkProps } from './type'

export const StyledLink: FC<StyledLinkProps> = ({ to, children }) => {
  return <S.Link to={to}>{children}</S.Link>
}
