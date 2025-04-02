import { FC, Fragment } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { RadioButton } from '@/components/ui/RadioButton/RadioButton'
import { Text } from '@/components/ui/Text/Text'
import { FormValues } from '@/pages/Pizza/PizzaEditorWrapper/type'

import * as S from './style'
import { RadioButtonListProps } from './type'

export const RadioButtonList: FC<RadioButtonListProps> = ({ fields }) => {
  const { control } = useFormContext<FormValues>()

  return (
    <div>
      <Text $fontSize="14px">Сезон</Text>
      <S.Container>
        <Controller
          control={control}
          name="vegetarian"
          render={({ field }) => (
            <>
              {fields.map((el) => (
                <Fragment key={el.id}>
                  <RadioButton
                    key={el.id}
                    label={el.label}
                    id={el.id}
                    onChange={() => field.onChange(el.value)}
                    checked={field.value === el.value}
                  />
                </Fragment>
              ))}
            </>
          )}
        />
      </S.Container>
    </div>
  )
}
