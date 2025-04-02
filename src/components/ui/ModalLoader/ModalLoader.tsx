import { PulseLoader } from 'react-spinners'

import { COLOR_LOADER } from '@/app/GlobalStyles/GlobalStyles'

import * as S from './style'

export const ModalLoader = () => {
  return (
    <S.Container>
      <PulseLoader color={COLOR_LOADER} speedMultiplier={0.75} />
    </S.Container>
  )
}
