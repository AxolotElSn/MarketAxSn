import IconClock from '@/assets/images/icons/clock.svg'
import IconLocation from '@/assets/images/icons/location.svg'
import IconMail from '@/assets/images/icons/mail.svg'
import IconPhone from '@/assets/images/icons/phone.svg'
import { StyledLink } from '@/components/ui/StyledLink/StyledLink'
import { Text } from '@/components/ui/Text/Text'
import { routesPaths } from '@/consts/routesPaths'

import * as S from './style'

export const Info = () => {
  const { pathPizzaList } = routesPaths

  return (
    <S.Container>
      <S.LinkWrapper>
        <StyledLink to={pathPizzaList}>&larr; Вернуться к ассотрименту</StyledLink>
      </S.LinkWrapper>

      <S.Row>
        <IconLocation />
        <Text $fontSize="14px">
          Ульяновск, ТК "Энтера", ул. Радищева, 39
          (Пункт выдачи)
        </Text>
        <Text $fontSize="14px">
          Ульяновск, ТК Альянс, ул. Рябикова, 70
        </Text>

      </S.Row>

      <S.Row>
        <IconClock />
        <Text $fontSize="14px">Доставка: Пн-Вс: 12:00 — 18:00</Text>
      </S.Row>

      <S.Row>
        <IconClock />
        <Text $fontSize="14px">Магазины: Пн-Вс: 10:00 — 20:00</Text>
      </S.Row>

      <S.Row>
        <IconMail />
        <S.Link href="mailto:example@mail.com">axolotsn@gmail.com</S.Link>
      </S.Row>

      <S.Row>
        <IconPhone />
        <S.Link href="tel:+78422123456">+7 963 234 30 58</S.Link>
      </S.Row>
    </S.Container>
  )
}
