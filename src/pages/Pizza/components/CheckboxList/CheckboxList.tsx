import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import { Text } from '@/components/ui/Text/Text'
import { FormValues } from '@/pages/Pizza/PizzaEditorWrapper/type'

import * as S from './style'
import { CheckboxListProps } from './type'

export const CheckboxList: FC<CheckboxListProps> = ({ fields }) => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useFormContext<FormValues>()

  const sizeValues = watch('size') || []

  const handleCheckboxChange = (s: string) => {
    const updatedSizes = sizeValues.includes(s)
      ? sizeValues.filter((item) => item !== s)
      : [...sizeValues, s]

    setValue('size', updatedSizes)
    trigger('size')
  }

  return (
    <div>
      <Text $fontSize="14px">Размеры</Text>
      <S.Container>
        {fields.map((el) => (
          <Controller
            key={el.id}
            control={control}
            name="size"
            rules={{
              validate: (v) => !!v?.length || 'Выберите размер(ы)',
            }}
            render={() => (
              <Checkbox
                label={el.label}
                id={el.id}
                onChange={() => handleCheckboxChange(el.label)}
                checked={sizeValues.includes(el.label)}
              />
            )}
          />
        ))}
        {errors.size && (
          <Text $fontSize="12px" $color="red500">
            {errors.size?.message}
          </Text>
        )}
      </S.Container>
    </div>
  )
}
