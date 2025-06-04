import React, { ChangeEvent, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { MOBILE } from '@/consts/mediaQueries'
import { routesPaths } from '@/consts/routesPaths'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter'
import { Pagination } from '@/pages/Pizza/components/Pagination/Pagination'
import { PizzaList } from '@/pages/Pizza/components/PizzaList/PizzaList'
import { CsvExport } from '@/components/CsvExport/CsvExport'
import * as S from './style'

import { RootState } from '@/store/store'
import { User } from '@/api/user'

export const PizzaListPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate()
  const { pathCreatePizza, pathImport } = routesPaths

  const user = useSelector<RootState, User | null>(state => state.user.user)

  const isAdmin = user?.role === 'admin' || user?.username === 'admin'

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const correctedInputValue = capitalizeFirstLetter(e.target.value)
    setInputValue(correctedInputValue)
  }

  const handleCreateClick = () => navigate(pathCreatePizza)
  const handleImportClick = () => navigate(pathImport) // Навигация на страницу импорта

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
          onClick={handleCreateClick}
        >
          Создать модель
        </Button>

        {/* Кнопка Импорт — видна только администратору */}
        {isAdmin && (
          <Button
            $size={isMobile ? 'medium' : 'large'}
            $variation="secondary"
            onClick={handleImportClick}
            style={{ marginLeft: '10px' }}
          >
            Импорт
          </Button>
        )}

        {/* Кнопка экспорта CSV — тоже только для админа */}
        {isAdmin && <CsvExport />}
      </S.InputWrapper>

      <PizzaList currentPage={currentPage} inputValue={inputValue} />

      <S.PaginationWrapper>
        <Pagination
          setCurrentPage={setCurrentPage}
          nexPage={currentPage + 1}
          prevPage={currentPage > 1 ? currentPage - 1 : 1}
        />
      </S.PaginationWrapper>
    </S.Conatiner>
  )
}
