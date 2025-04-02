import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const StyledMapContainer = styled(MapContainer)({
  flexBasis: '0',
  flexGrow: '1',
  height: '100%',
  borderRadius: '9px',

  '.leaflet-popup-content': {
    fontFamily: 'RobotoMono, sans-serif',
  },
})
