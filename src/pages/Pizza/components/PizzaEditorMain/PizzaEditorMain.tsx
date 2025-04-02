import { ChangeEvent, FC, useState } from 'react'
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form'

import { FileInput } from '@/components/ui/FileInput/FileInput'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { fileToBase64 } from '@/helpers/fileToBase64'
import { FormValues } from '@/pages/Pizza/PizzaEditorWrapper/type'

import * as S from './style'
import { CreatePizzaMainProps } from './type'

export const PizzaEditorMain: FC<CreatePizzaMainProps> = ({
  isEditPage,
  image,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  const [label, setLabel] = useState('')

  const handleLoadFile = async (
    e: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<FormValues, 'image'>,
  ) => {
    setLabel(e.target.files[0]?.name)

    if (!e.target.files[0]) return

    const imgBase64 = await fileToBase64(e.target.files[0])
    field.onChange(imgBase64)
  }

  return (
    <S.Container>
      <Controller
        control={control}
        name="image"
        rules={{
          validate: (v) => v.length > 0 || 'Выберите файл',
        }}
        render={({ field }) => (
          <S.Wrapper>
            {isEditPage && (
              <S.ImgWrapper>
                <S.Img src={image} alt="pizza" />
              </S.ImgWrapper>
            )}

            <FileInput
              label={label}
              onChange={(e) => {
                handleLoadFile(e, field)
              }}
              isError={!!errors.image?.message}
              accept="image/jpeg, image/png, image/gif, image/bmp"
            />
          </S.Wrapper>
        )}
      />

      <Controller
        control={control}
        name="description"
        rules={{
          required: 'Поле обязательно к заполнению',
        }}
        render={({ field }) => (
          <Textarea
            label="Описание"
            id="description"
            onChange={field.onChange}
            value={field.value}
            $isError={!!errors.description?.message}
            errorMessage={errors.description?.message}
            maxLength={300}
            height="200px"
          />
        )}
      />
    </S.Container>
  )
}
