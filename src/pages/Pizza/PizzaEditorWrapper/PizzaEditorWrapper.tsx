import { useCallback, useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { createPizza, editPizza } from '@/api/pizza'
import { PizzaBody } from '@/api/pizza/type'
import { ModalLoader } from '@/components/ui/ModalLoader/ModalLoader'
import { routesPaths } from '@/consts/routesPaths'
import { useAppSelector } from '@/hooks/useAppSelector'
import { PizzaEditorAdditional } from '@/pages/Pizza/components/PizzaEditorAdditional/PizzaEditorAdditional'
import { PizzaEditorMain } from '@/pages/Pizza/components/PizzaEditorMain/PizzaEditorMain'
import { fetchPizza } from '@/store/actionCreators/pizzaActionCreators'
import { selectPizza } from '@/store/selectors/pizzaSelectors'

import { defaultValues } from './consts/defaultValues'
import * as S from './style'
import { FormValues } from './type'

export const PizzaEditorWrapper = () => {
  const [isCreatingLoading, setIsCreatingLoading] = useState(false)
  const [isEditingLoading, setIsEditingLoading] = useState(false)
  const [creatingError, setCreatingError] = useState('')
  const [editingError, setEditingError] = useState('')

  const navigate = useNavigate()
  const { pizzaId } = useParams()
  const dispatch = useDispatch()
  const {
    errorMessage: loadingError,
    isLoading: isPizzaLoading,
    pizza,
  } = useAppSelector(selectPizza)

  const isEditPage = Boolean(pizzaId)

  const methods = useForm<FormValues>({
    mode: isEditPage ? 'onSubmit' : 'onChange',
    defaultValues,
  })

  const { handleSubmit, setValue } = methods

  const setValues = useCallback(() => {
    setValue('description', pizza.description)
    setValue('image', pizza.image)
    setValue('ingredients', pizza.ingredients)
    setValue('isSale', pizza.isSale)
    setValue('isSoldOut', pizza.isSoldOut)
    setValue('name', pizza.name)
    setValue('price', pizza.price)
    setValue('rating', pizza.rating)
    setValue('vegetarian', pizza.vegetarian)
    setValue('size', pizza.size)
  }, [pizza, setValue])

  useEffect(() => {
    if (isEditPage) dispatch(fetchPizza(pizzaId))
  }, [dispatch, isEditPage, pizzaId])

  useEffect(() => {
    if (isEditPage) setValues()
  }, [isEditPage, setValues])

  const { pathPizzaDetail } = routesPaths
  const isLoading = isCreatingLoading || isEditingLoading || isPizzaLoading

  const handleCreatePizza: SubmitHandler<FormValues> = async (
    data: PizzaBody,
  ) => {
    setIsCreatingLoading(true)

    try {
      const pizza = await createPizza(data)
      navigate(`${pathPizzaDetail}/${pizza.id}`)
    } catch (error: unknown) {
      if (error instanceof Error) setCreatingError(error.message)
    } finally {
      setIsCreatingLoading(false)
    }
  }

  const handleEditPizza: SubmitHandler<FormValues> = async (
    data: PizzaBody,
  ) => {
    setIsEditingLoading(true)

    try {
      const pizza = await editPizza(pizzaId, data)
      navigate(`${pathPizzaDetail}/${pizza.id}`)
    } catch (error: unknown) {
      if (error instanceof Error) setEditingError(error.message)
    } finally {
      setIsEditingLoading(false)
    }
  }

  if (isLoading) return <ModalLoader />
  if (creatingError) return <div>{creatingError}</div>
  if (editingError) return <div>{editingError}</div>
  if (loadingError) return <div>{loadingError}</div>

  return (
    <FormProvider {...methods}>
      <S.Form
        onSubmit={handleSubmit(
          isEditPage ? handleEditPizza : handleCreatePizza,
        )}
      >
        <PizzaEditorMain isEditPage={isEditPage} image={pizza.image} />
        <PizzaEditorAdditional isEditPage={isEditPage} />
      </S.Form>
    </FormProvider>
  )
}
