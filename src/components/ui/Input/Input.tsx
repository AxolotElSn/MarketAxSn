import { forwardRef, RefObject } from 'react'

import { Row } from '@/components/ui/Row/Row'
import { Text } from '@/components/ui/Text/Text'

import * as S from './style'
import { InputProps } from './type'

export const Input = forwardRef(
  (props: InputProps, ref: RefObject<HTMLInputElement>) => {
    const { id, $isError, label, width, errorMessage, ...rest } = props

    return (
      <Row $gap="4px">
        {label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Input
          id={id}
          $isError={$isError}
          width={width}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <Text $fontSize="12px" $color="red500">
            {errorMessage}
          </Text>
        )}
      </Row>
    )
  },
)

Input.displayName = 'Input'
