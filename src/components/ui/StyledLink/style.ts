import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(NavLink)({
  color: 'var(--c-yellow-700)',
  textDecoration: 'none',
  transition: 'all 0.1s linear',

  '&:hover': {
    textDecoration: 'underline',
    filter: 'brightness(70%)',
  },
})
