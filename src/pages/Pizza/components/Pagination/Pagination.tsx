import { FC } from 'react'

import { Button } from '@/components/ui/Button/Button'

import * as S from './style'
import { PaginationProps } from './type'

export const Pagination: FC<PaginationProps> = ({
  setCurrentPage,
  nexPage,
  prevPage,
}) => {
  const isNextDisabled = Boolean(!nexPage)
  const isPrevDisabled = Boolean(!prevPage)

  const handlePrev = () => setCurrentPage((v) => v - 1)
  const handleNext = () => setCurrentPage((v) => v + 1)

  return (
    <S.Container>
      <Button onClick={handlePrev} disabled={isPrevDisabled}>
        prev
      </Button>
      <Button onClick={handleNext} disabled={isNextDisabled}>
        next
      </Button>
    </S.Container>
  )
}
