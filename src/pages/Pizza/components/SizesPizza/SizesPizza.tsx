import { FC } from 'react'

import { pizzaSizes } from './consts/pizzaSizes'
import * as S from './style'
import { SizesPizzaProps } from './type'

export const SizesPizza: FC<SizesPizzaProps> = ({ sizes }) => {
  return (
    <S.Container>
      {pizzaSizes.map((item) => (
        <S.Size $item={item} $sizes={sizes} key={item}>
          {item}
        </S.Size>
      ))}
    </S.Container>
  )
}
