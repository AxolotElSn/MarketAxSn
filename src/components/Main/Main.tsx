import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectUser } from '@/store/selectors/userSelectors'
import { routesPaths } from '@/consts/routesPaths'
import * as S from './style'
import { logout } from '@/store/actions/userActions' // импорт экшена logout

export const Main = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate(routesPaths.pathLogin)
  }

  return (
    <S.MainWrapper>
      {!user ? (
        <S.WelcomeWrapper>
          <S.Welcome>Добро пожаловать в наш магазин!</S.Welcome>
          <S.AuthButton onClick={() => navigate(routesPaths.pathLogin)}>
            Войти / Зарегистрироваться
          </S.AuthButton>
        </S.WelcomeWrapper>
      ) : (
        <>
          <S.Welcome>
            Добро пожаловать, <b>{user.username}</b>!
          </S.Welcome>
          <S.LogoutButton onClick={handleLogout}>Выйти</S.LogoutButton>
        </>
      )}

      <Outlet />
    </S.MainWrapper>
  )
}
