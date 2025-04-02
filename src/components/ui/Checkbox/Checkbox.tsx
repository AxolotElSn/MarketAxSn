import { FC } from 'react'

import * as S from './style'
import { CheckboxProps } from './type'

export const Checkbox: FC<CheckboxProps> = ({
  label,
  id,
  onChange,
  checked,
  disabled,
}) => {
  return (
    <S.Container>
      <S.Input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.Container>
  )
}
