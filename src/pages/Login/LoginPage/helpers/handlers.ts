import * as VKID from '@vkid/sdk'

export const renderWidget = (oneTap: VKID.OneTap, container: HTMLElement) => {
  const handleError = (error: Error) => {
    alert(error.message)
  }

  // Отрисовка кнопки в контейнере
  oneTap
    .render({
      container,
      styles: {
        height: 38,
      },
      skin: VKID.OneTapSkin.Secondary,
    })
    // Обработчик ошибки
    .on(VKID.WidgetEvents.ERROR, handleError)
}

export const registerEventHandlers = (
  oneTap: VKID.OneTap,
  onSuccessHandler: (data: Omit<VKID.TokenResult, 'id_token'>) => Promise<void>,
  onErrorHandler: (error: Error) => void,
) => {
  // Обработчик успешной авторизации
  oneTap.on(
    VKID.OneTapInternalEvents.LOGIN_SUCCESS,
    function (payload: { code: string; device_id: string }) {
      // Код подтверждения (code) и идентификатор устройства (deviceId) нужны для получения токенов
      const code = payload.code
      const deviceId = payload.device_id

      VKID.Auth.exchangeCode(code, deviceId)
        .then(onSuccessHandler)
        .catch(onErrorHandler)
    },
  )
}
