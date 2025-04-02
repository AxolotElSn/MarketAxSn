import { Logo } from '@/components/Logo/Logo'
import { Nav } from '@/components/Nav/Nav'

import * as S from './style'

export const Header = () => {
  return (
    <S.Header>
      <Logo />
      <Nav />
    </S.Header>
  )
}
