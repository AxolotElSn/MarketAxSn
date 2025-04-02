import { Controller, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/Button/Button'
import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import { Input } from '@/components/ui/Input/Input'
import { CheckboxList } from '@/pages/Pizza/components/CheckboxList/CheckboxList'
import { RadioButtonList } from '@/pages/Pizza/components/RadioButtonList/RadioButtonList'
import { FormValues } from '@/pages/Pizza/PizzaEditorWrapper/type'

import { checkboxFields } from './consts/checkboxFields'
import { radioButtonFields } from './consts/radioButtonFields'
import * as S from './style'
import { CreatePizzaAdditionalProps } from './type'

export const PizzaEditorAdditional = ({
  isEditPage,
}: CreatePizzaAdditionalProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <S.Container>
      <S.InputTextWrapper>
        <Controller
          control={control}
          name="name"
          rules={{
            required: 'Поле обязательно к заполнению',
          }}
          render={({ field }) => (
            <Input
              label="Название"
              id="name"
              onChange={field.onChange}
              value={field.value}
              $isError={!!errors.name?.message}
              errorMessage={errors.name?.message}
              maxLength={40}
              width="250px"
            />
          )}
        />

        <Controller
          control={control}
          name="price"
          rules={{
            validate: (v) => v > 0 || 'Поле обязательно к заполнению',
            min: {
              value: 0,
              message: 'Некорректное значение',
            },
          }}
          render={({ field }) => (
            <Input
              label="Цена"
              id="price"
              type="number"
              onChange={(e) => field.onChange(Number(e.target.value))}
              value={field.value === 0 ? '' : field.value}
              $isError={!!errors.price?.message}
              errorMessage={errors.price?.message}
              min={0}
              width="250px"
            />
          )}
        />
        <Controller
          control={control}
          name="rating"
          rules={{
            validate: (v) => v > 0 || 'Поле обязательно к заполнению',
            min: {
              value: 0,
              message: 'Некорректное значение',
            },
            max: {
              value: 5,
              message: 'Максимально допустимое значение: 5',
            },
          }}
          render={({ field }) => (
            <Input
              label="Рейтинг"
              id="rating"
              type="number"
              onChange={(e) => field.onChange(Number(e.target.value))}
              value={field.value === 0 ? '' : field.value}
              min={0}
              max={5}
              step={0.1}
              $isError={!!errors.rating?.message}
              errorMessage={errors.rating?.message}
              width="250px"
            />
          )}
        />
      </S.InputTextWrapper>

      <S.Wrapper>
        <CheckboxList fields={checkboxFields} />
        <RadioButtonList fields={radioButtonFields} />
      </S.Wrapper>

      <S.Wrapper>
        <Controller
          control={control}
          name="isSale"
          render={({ field }) => (
            <Checkbox
              id="isSale"
              label="Спецпредложение"
              onChange={field.onChange}
              checked={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="isSoldOut"
          render={({ field }) => (
            <Checkbox
              id="isSoldOut"
              label="Распродано"
              onChange={field.onChange}
              checked={field.value}
              disabled={true}
            />
          )}
        />
      </S.Wrapper>

      <S.ButtonWrapper>
        <Button>{isEditPage ? 'Сохранить' : 'Создать'}</Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
