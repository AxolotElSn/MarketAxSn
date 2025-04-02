import * as VKID from '@vkid/sdk'
import Cookies from 'js-cookie'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import ImagePizza from '@/assets/images/pizza.png'
import { routesPaths } from '@/consts/routesPaths'

import { REDIRECT_URL } from './consts/redirectUrl'
import { registerEventHandlers, renderWidget } from './helpers/handlers'
import * as S from './style'

export const LoginPage = () => {
  // const navigate = useNavigate()

  // const { pathPizzaList } = routesPaths

  // const onSuccessHandler = useCallback(
  //   async (data: Omit<VKID.TokenResult, 'id_token'>) => {
  //     const { access_token, refresh_token, user_id } = data
  //     Cookies.set('accessToken', access_token)
  //     Cookies.set('refreshToken', refresh_token)
  //     Cookies.set('userId', String(user_id))

  //     const response = await VKID.Auth.userInfo(access_token)
  //     Cookies.set('username', response.user.first_name)

  //     navigate(pathPizzaList)
  //   },
  //   [navigate, pathPizzaList],
  // )

  // const onErrorHandler = useCallback((error: Error) => {
  //   alert(error.message)
  // }, [])

  // useEffect(() => {
  //   // SDK конфиг
  //   VKID.Config.init({
  //     app: Number(process.env.VK_APP_ID),
  //     redirectUrl: REDIRECT_URL,
  //     codeVerifier: uuidv4(),
  //     scope: 'vkid.personal_info email',
  //     responseMode: VKID.ConfigResponseMode.Callback,
  //   })

  //   // Создание экземпляра кнопки
  //   const oneTap = new VKID.OneTap()

  //   // Получение контейнера из разметки
  //   const container = document.getElementById('VkIdSdkOneTap')

  //   // Проверка наличия кнопки в разметке
  //   if (container) {
  //     renderWidget(oneTap, container)
  //     registerEventHandlers(oneTap, onSuccessHandler, onErrorHandler)
  //   }
  // }, [onErrorHandler, onSuccessHandler])

  return (
    <div>Hello!</div>
  )
}
