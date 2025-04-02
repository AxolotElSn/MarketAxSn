import { ChangeEvent, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { MOBILE } from '@/consts/mediaQueries'
import { routesPaths } from '@/consts/routesPaths'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import { useAppSelector } from '@/hooks/useAppSelector'
import { Pagination } from '@/pages/Pizza/components/Pagination/Pagination'
import { PizzaList } from '@/pages/Pizza/components/PizzaList/PizzaList'
import { selectPizzaList } from '@/store/selectors/pizaListSelectors'

import * as S from './style'

export const PizzaListPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const { nextPage, prevPage } = useAppSelector(selectPizzaList)
  const navigate = useNavigate()

  const { pathCreatePizza } = routesPaths

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const correctedInputValue = capitalizeFirstLetter(e.target.value)
    setInputValue(correctedInputValue)
  }

  const handleClick = () => navigate(pathCreatePizza)

  const isMobile = useMediaQuery({
    query: MOBILE,
  })

  return (
    <S.Conatiner>
      <S.InputWrapper>
        <Input
          value={inputValue}
          placeholder="Поиск"
          width="220px"
          onChange={handleChange}
        />
        <Button
          $size={isMobile ? 'medium' : 'large'}
          $variation="primary"
          onClick={handleClick}
        >
          Создать пиццу
        </Button>
      </S.InputWrapper>

      <PizzaList currentPage={currentPage} inputValue={inputValue} />

      <S.PaginationWrapper>
        <Pagination
          setCurrentPage={setCurrentPage}
          nexPage={nextPage}
          prevPage={prevPage}
        />
      </S.PaginationWrapper>
    </S.Conatiner>
  )
}
