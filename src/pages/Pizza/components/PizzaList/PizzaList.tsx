import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { LIMIT_PIZZA_LIST } from '@/api/consts'
import { ModalLoader } from '@/components/ui/ModalLoader/ModalLoader'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useDebounce } from '@/hooks/useDebounce'
import { CardPizza } from '@/pages/Pizza/components/CardPizza/CardPizza'
import { EmptyPizzaList } from '@/pages/Pizza/components/EmptyPizzaList/EmptyPizzaList'
import { fetchPizzaList } from '@/store/actionCreators/pizzaLIstActionCreators'
import { selectPizzaList } from '@/store/selectors/pizaListSelectors'

import { DEBOUNCE_DELAY } from './consts/debounceDelay'
import * as S from './style'
import { PizzaListProps } from './type'

export const PizzaList: FC<PizzaListProps> = ({ inputValue, currentPage }) => {
  const dispatch = useDispatch()
  const { pizzaList, errorMessage, isLoading } = useAppSelector(selectPizzaList)
  const debouncedInputValue = useDebounce(inputValue, DEBOUNCE_DELAY)

  const isEmptyArray = !pizzaList.length

  useEffect(() => {
    dispatch(
      fetchPizzaList({
        page: currentPage,
        limit: LIMIT_PIZZA_LIST,
        search: debouncedInputValue,
      }),
    )
  }, [currentPage, debouncedInputValue, dispatch])

  if (isLoading) return <ModalLoader />
  if (errorMessage) return <div>{errorMessage}</div>

  if (isEmptyArray) return <EmptyPizzaList />

  return (
    <S.Container>
      {pizzaList.map((item) => (
        <CardPizza pizza={item} key={item.id} />
      ))}
    </S.Container>
  )
}
