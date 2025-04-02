import { forwardRef, RefObject } from 'react'

import * as S from './style'
import { FileInputProps } from './type'

export const FileInput = forwardRef(
  (props: FileInputProps, ref: RefObject<HTMLInputElement>) => {
    const { label, isError, ...rest } = props

    return (
      <S.Container>
        <S.Input type="file" id="fileInput" ref={ref} {...rest} />
        <S.Label $isError={isError} htmlFor="fileInput">
          <span>{label || 'Выберите файл...'}</span>
          <span>Обзор</span>
        </S.Label>
      </S.Container>
    )
  },
)

FileInput.displayName = 'FileInput'

FileInput.defaultProps = {
  isError: false,
}
