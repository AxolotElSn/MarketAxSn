import { Outlet } from 'react-router-dom'

import * as S from './style'

export const Main = () => {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  )
}
