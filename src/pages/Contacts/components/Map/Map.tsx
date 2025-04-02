import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { Marker, Popup, TileLayer } from 'react-leaflet'

import { position } from './consts/position'
import * as S from './style'

export const Map = () => {
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
    <S.StyledMapContainer center={position} zoom={18} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" /> 
      <Marker position={position}>
        <Popup>AxelShoes</Popup>
      </Marker>
    </S.StyledMapContainer>
  )
}
