import { Info } from '@/pages/Contacts/components/Info/Info'
import { Map } from '@/pages/Contacts/components/Map/Map'

import * as S from './style'

export const Contacts = () => {
  return (
    <S.Conatiner>
      <Info />
      <Map />
    </S.Conatiner>
  )
}
