import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

import { QuantityPicker } from '@/components/QuantityPicker/QuantityPicker'
import { Button } from '@/components/ui/Button/Button'
import { Row } from '@/components/ui/Row/Row'
import { Text } from '@/components/ui/Text/Text'
import { routesPaths } from '@/consts/routesPaths'
import { useAppSelector } from '@/hooks/useAppSelector'
import { SizesPizza } from '@/pages/Pizza/components/SizesPizza/SizesPizza'
import {
  addPizza,
  deletePizza,
} from '@/store/actionCreators/cartActionCreators'
import { selectCart, selectQuantityById } from '@/store/selectors/cartSelectors'

import { MAX_LENGTH } from './consts/maxLength'
import * as S from './style'
import { CardPizzaProps } from './type'

export const CardPizza: FC<CardPizzaProps> = ({ pizza }) => {
  const dispatch = useDispatch()
  const cart = useAppSelector(selectCart)
  const quantity = useAppSelector(selectQuantityById(pizza.id))
  const navigate = useNavigate()

  const { id, image, name, description, price, isSoldOut, size } = pizza

  const isPizzaInCart =
    cart.find((item) => item.pizza.id === pizza.id) !== undefined

  const correctedDescription =
    description.length > MAX_LENGTH
      ? `${description.slice(0, MAX_LENGTH)}...`
      : description

  const { pathPizzaDetail } = routesPaths

  const handleSelectPizza = () => {
    if (isPizzaInCart) {
      dispatch(deletePizza(id))
      return
    }

    dispatch(
      addPizza({
        pizza,
        quantity: 1,
      }),
    )
  }

  const handleClickToDeatail = () => navigate(`${pathPizzaDetail}/${id}`)

  return (
    <S.Container>
      <S.ImgWrapper onClick={handleClickToDeatail}>
        <S.Img src={image} alt="pizza" $isSoldOut={isSoldOut} />
      </S.ImgWrapper>
      <Text $fontSize="20px" $textAlign="center">
        {name}
      </Text>
      <S.Description
        data-tooltip-id="description"
        data-tooltip-content={description}
      >
        {correctedDescription}
      </S.Description>
      <S.WrapperBottom>
        <SizesPizza sizes={size} />
        <Row type="horizontal" $alignItems="center">
          <Text $fontSize="22px" $color="yellow700">
            от {price} ₽
          </Text>
          {isPizzaInCart && <QuantityPicker id={id} quantity={quantity} />}
        </Row>
        <S.ButtonWrapper>
          <Button onClick={handleSelectPizza} disabled={isSoldOut}>
            {isPizzaInCart ? 'Удалить' : 'Выбрать'}
          </Button>
        </S.ButtonWrapper>
      </S.WrapperBottom>

      <Tooltip id="description" />
    </S.Container>
  )
}
