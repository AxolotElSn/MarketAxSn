import { FC } from 'react'

import { CookiesPopup } from '@/components/CookiesPopup/CookiesPopup'
import { Header } from '@/components/Header/Header'

import * as S from './style'
import { AppLayoutProps } from './type'

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <CookiesPopup />
      <S.AppLayout>
        <Header />
        {children}
      </S.AppLayout>
    </>
  )
}
