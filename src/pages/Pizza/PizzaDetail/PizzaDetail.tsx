import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { deletePizza } from '@/api/pizza'
import { Button } from '@/components/ui/Button/Button'
import { ModalLoader } from '@/components/ui/ModalLoader/ModalLoader'
import { routesPaths } from '@/consts/routesPaths'
import { formatPrice } from '@/helpers/formatPrice'
import { useAppSelector } from '@/hooks/useAppSelector'
import { fetchPizza } from '@/store/actionCreators/pizzaActionCreators'
import { selectPizza } from '@/store/selectors/pizzaSelectors'

import * as S from './style'

export const PizzaDetail = () => {
  const [isDeletion, setIsDeletion] = useState(false)
  const [deletionError, setDeletionError] = useState('')
  const { pizzaId } = useParams()
  const dispatch = useDispatch()
  const {
    errorMessage: fetchingError,
    isLoading: isFetching,
    pizza,
  } = useAppSelector(selectPizza)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchPizza(pizzaId))
  }, [dispatch, pizzaId])

  const {
    description,
    id,
    image,
    ingredients,
    isSale,
    isSoldOut,
    name,
    price,
    rating,
    size,
    vegetarian,
  } = pizza

  const { pathEditPizza, pathPizzaList } = routesPaths
  const isLoading = isDeletion || isFetching

  const handleClickToEdit = () => navigate(`${pathEditPizza}/${id}`)

  const handleClickToDelete = async () => {
    setIsDeletion(true)

    try {
      await deletePizza(pizzaId)

      navigate(pathPizzaList)
    } catch (error: unknown) {
      if (error instanceof Error) setDeletionError(error.message)
    } finally {
      setIsDeletion(false)
    }
  }

  const handleClickToPizzaList = () => navigate(pathPizzaList)

  if (isLoading) return <ModalLoader />
  if (fetchingError) return <div>{fetchingError}</div>
  if (deletionError) return <div>{deletionError}</div>

  return (
    <S.Container>
      <S.ImgWrapper>
        <S.Img src={image} alt="pizza" />
      </S.ImgWrapper>

      <S.Content>
        <S.Header>{name}</S.Header>

        <S.TextWrapper>
          <span>Описание: </span>
          <span>{description}</span>
        </S.TextWrapper>

        <S.TextWrapper>
          <span>Спецпредложение: </span>
          <span>{isSale ? 'Да' : 'Нет'}</span>
        </S.TextWrapper>

        <S.TextWrapper>
          <span>Распродано: </span>
          <span>{isSoldOut ? 'Да' : 'Нет'}</span>
        </S.TextWrapper>

        <S.TextWrapper>
          <span>Рейтинг: </span>
          <span>{rating}</span>
        </S.TextWrapper>

        <S.TextWrapper>
          <span>Размеры: </span>
          <span>
            {size.map((el, i, arr) => {
              const isLastItem = i === arr.length - 1
              return isLastItem ? el : `${el}, `
            })}
          </span>
        </S.TextWrapper>

        <S.TextWrapper>
          <span>Сезон: </span>
          <span>{vegetarian ? 'Лето' : 'Зима'}</span>
        </S.TextWrapper>

        <S.TextWrapper>
          <span>Цена: </span>
          <span>{formatPrice(price)} ₽</span>
        </S.TextWrapper>

        <S.ButtonWrapper>
          <Button onClick={handleClickToPizzaList} $variation="secondary">
            Вернуться к ассортименту
          </Button>
          <Button onClick={handleClickToEdit}>Редактировать</Button>
          <Button onClick={handleClickToDelete} $variation="danger">
            Удалить
          </Button>
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  )
}
