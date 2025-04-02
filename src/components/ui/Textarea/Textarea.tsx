import { forwardRef, RefObject } from 'react'

import { Row } from '@/components/ui/Row/Row'
import { Text } from '@/components/ui/Text/Text'

import * as S from './style'
import { TextareaProps } from './type'

export const Textarea = forwardRef(
  (props: TextareaProps, ref: RefObject<HTMLTextAreaElement>) => {
    const { id, $isError, label, width, height, errorMessage, ...rest } = props

    return (
      <Row $gap="4px">
        {label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Textarea
          id={id}
          $isError={$isError}
          width={width}
          height={height}
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

Textarea.displayName = 'Textarea'
