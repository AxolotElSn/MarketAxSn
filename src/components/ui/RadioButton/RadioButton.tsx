import { FC } from 'react'

import * as S from './style'
import { RadioButtonProps } from './type'

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  id,
  onChange,
  value,
  name,
  defaultChecked,
  checked,
  disabled,
}) => {
  return (
    <S.Container>
      <input
        onChange={onChange}
        value={value}
        type="radio"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </S.Container>
  )
}
