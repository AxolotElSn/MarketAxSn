import { useState } from 'react'
import { Portal } from 'react-portal'
import { useMediaQuery } from 'react-responsive'

import IconCookie from '@/assets/images/icons/cookie.svg'
import { Button } from '@/components/ui/Button/Button'
import { MOBILE } from '@/consts/mediaQueries'

import * as S from './style'

export const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(true)

  const isMobile = useMediaQuery({
    query: MOBILE,
  })

  const handleAccept = () => setIsVisible(false)

  if (!isVisible) return null

  return (
    <Portal>
      <S.Container>
        <S.IconWrapper>
          <IconCookie />
        </S.IconWrapper>
        <S.Text>Для улучшения качества услуг мы используем cookies</S.Text>
        <Button onClick={handleAccept} $size={isMobile ? 'small' : 'medium'}>
          Ок
        </Button>
      </S.Container>
    </Portal>
  )
}
